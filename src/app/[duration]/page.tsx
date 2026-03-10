import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageContent from "@/components/shared/PageContent";
import { DAYS_FULL } from "@/components/days/types";

const VALID_DURATIONS = [
  "1-day-tokyo-itinerary",
  "2-day-tokyo-itinerary",
  "3-day-tokyo-itinerary",
  "4-day-tokyo-itinerary",
  "5-day-tokyo-itinerary",
  "6-day-tokyo-itinerary",
  "7-day-tokyo-itinerary",
];

function getDaysFromSlug(slug: string): number | null {
  const match = slug.match(/^(\d)-day-tokyo-itinerary$/);
  if (!match) return null;
  const num = parseInt(match[1]);
  return num >= 1 && num <= 7 ? num : null;
}

export function generateStaticParams() {
  return VALID_DURATIONS.map((d) => ({ duration: d }));
}

const DURATION_META: Record<
  number,
  {
    codename: string;
    tagline: string;
    neighborhoods: string;
    stops: number;
    foodPicks: number;
  }
> = {
  1: {
    codename: "The Blitz",
    tagline: "The essential Tokyo contrast in 12 hours",
    neighborhoods: "Asakusa, Harajuku, Shibuya, Shinjuku",
    stops: 5,
    foodPicks: 6,
  },
  2: {
    codename: "The Deep Contrast",
    tagline: "Ancient temples, digital art, and market culture",
    neighborhoods:
      "Asakusa, Harajuku, Shibuya, Shinjuku, Toyosu, Tsukiji, Ginza",
    stops: 9,
    foodPicks: 12,
  },
  3: {
    codename: "The Culture & Tech",
    tagline: "Museums, anime paradise, and old Tokyo",
    neighborhoods:
      "Asakusa, Harajuku, Shibuya, Shinjuku, Toyosu, Tsukiji, Ginza, Ueno, Akihabara, Yanaka",
    stops: 13,
    foodPicks: 18,
  },
  4: {
    codename: "The Imperial",
    tagline: "Peaceful gardens and the city\u2019s best free viewpoint",
    neighborhoods:
      "Asakusa, Harajuku, Shibuya, Shinjuku, Toyosu, Tsukiji, Ginza, Ueno, Akihabara, Imperial Palace, Shinjuku Gyoen",
    stops: 17,
    foodPicks: 24,
  },
  5: {
    codename: "The Coastal Escape",
    tagline:
      "Day trip to Kamakura\u2019s Great Buddha and ocean temples",
    neighborhoods: "Central Tokyo, Kamakura, Hase, Enoshima",
    stops: 23,
    foodPicks: 30,
  },
  6: {
    codename: "The Mountain Shrine",
    tagline: "UNESCO golden shrines and a 97m waterfall in Nikko",
    neighborhoods: "Central Tokyo, Kamakura, Nikko, Lake Chuzenji",
    stops: 28,
    foodPicks: 36,
  },
  7: {
    codename: "The Full Immersion",
    tagline: "Hidden neighborhoods tourists never find",
    neighborhoods:
      "Central Tokyo, Kamakura, Nikko, Shimokitazawa, Kichijoji, Nakano",
    stops: 32,
    foodPicks: 42,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ duration: string }>;
}): Promise<Metadata> {
  const { duration } = await params;
  const days = getDaysFromSlug(duration);
  if (!days) return {};

  const meta = DURATION_META[days];
  const dayWord = days === 1 ? "Day" : "Days";

  return {
    title: `${days}-${dayWord} Tokyo Itinerary 2026 \u2014 ${meta.codename}`,
    description: `The perfect ${days}-day Tokyo itinerary for 2026. ${meta.stops} stops, ${meta.foodPicks} restaurant picks across ${meta.neighborhoods}. ${meta.tagline}. Every train timed, locally audited.`,
    keywords: [
      `${days} day Tokyo itinerary`,
      `${days} day Tokyo trip`,
      `Tokyo in ${days} days`,
      `Tokyo ${days} day plan`,
      `Tokyo itinerary 2026`,
    ],
    alternates: {
      canonical: `https://tokyoitine.com/${duration}`,
    },
    openGraph: {
      title: `${days}-${dayWord} Tokyo Itinerary \u2014 ${meta.codename} | 2026`,
      description: `${meta.stops} stops. ${meta.foodPicks} restaurant picks. ${meta.tagline}. Field-tested and locally audited.`,
      url: `https://tokyoitine.com/${duration}`,
      images: [
        {
          url: `/og/${days}-day.png`,
          width: 1200,
          height: 630,
          alt: `${days}-Day Tokyo Itinerary 2026`,
        },
      ],
    },
  };
}

function getItinerarySchema(days: number, slug: string) {
  const meta = DURATION_META[days];
  const dayWord = days === 1 ? "day" : "days";

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${days}-${dayWord} Tokyo Itinerary \u2014 ${meta.codename}`,
    description: `A field-tested ${days}-${dayWord} Tokyo itinerary covering ${meta.stops} stops and ${meta.foodPicks} restaurant recommendations across ${meta.neighborhoods}.`,
    touristType: "Sightseeing",
    itinerary: {
      "@type": "ItemList",
      numberOfItems: days,
      itemListElement: DAYS_FULL.slice(0, days).map((day, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: `Day ${i + 1}: ${day.title} \u2014 ${day.neighborhoods}`,
          description: day.tagline,
          itinerary: {
            "@type": "ItemList",
            itemListElement: day.stops.map((stop, j) => ({
              "@type": "ListItem",
              position: j + 1,
              item: {
                "@type": "TouristAttraction",
                name: stop.place,
                description: stop.desc,
              },
            })),
          },
        },
      })),
    },
  };
}

function getBreadcrumbSchema(days: number, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Tokyo Itinerary",
        item: "https://tokyoitine.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${days}-Day Itinerary`,
        item: `https://tokyoitine.com/${slug}`,
      },
    ],
  };
}

export default async function DurationPage({
  params,
}: {
  params: Promise<{ duration: string }>;
}) {
  const { duration } = await params;
  const days = getDaysFromSlug(duration);
  if (!days) notFound();

  const itinerarySchema = getItinerarySchema(days, duration);
  const breadcrumbSchema = getBreadcrumbSchema(days, duration);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itinerarySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <PageContent initialDays={days} isDurationPage={true} />
    </>
  );
}
