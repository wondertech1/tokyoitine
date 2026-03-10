import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getNeighborhood,
  getAllNeighborhoodSlugs,
} from "@/data/neighborhoods";
import NeighborhoodNav from "@/components/neighborhoods/NeighborhoodNav";
import NeighborhoodBreadcrumb from "@/components/neighborhoods/NeighborhoodBreadcrumb";
import NeighborhoodHero from "@/components/neighborhoods/NeighborhoodHero";
import WhatToDo from "@/components/neighborhoods/WhatToDo";
import WhereToEat from "@/components/neighborhoods/WhereToEat";
import GettingThere from "@/components/neighborhoods/GettingThere";
import TimingCard from "@/components/neighborhoods/TimingCard";
import ItineraryLink from "@/components/neighborhoods/ItineraryLink";
import Footer from "@/components/footer/Footer";

export function generateStaticParams() {
  return getAllNeighborhoodSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNeighborhood(slug);
  if (!n) return {};

  return {
    title: `${n.name} Guide 2026 — What to Do, Eat & How to Get There`,
    description: n.metaDescription,
    keywords: n.keywords,
    alternates: {
      canonical: `https://tokyoitine.com/neighborhoods/${n.slug}`,
    },
    openGraph: {
      title: `${n.name} — ${n.subtitle} | Tokyo Itinerary 2026`,
      description: n.metaDescription,
      url: `https://tokyoitine.com/neighborhoods/${n.slug}`,
      images: [
        {
          url: `/og/neighborhoods/${n.slug}.png`,
          width: 1200,
          height: 630,
          alt: `${n.name} Neighborhood Guide — Tokyo 2026`,
        },
      ],
    },
  };
}

function getNeighborhoodSchema(slug: string) {
  const n = getNeighborhood(slug);
  if (!n) return null;

  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: n.name,
    description: n.metaDescription,
    touristType: "Sightseeing",
    includesAttraction: n.activities.map((a) => ({
      "@type": "TouristAttraction",
      name: a.name,
      description: a.desc,
    })),
  };
}

function getBreadcrumbSchema(slug: string) {
  const n = getNeighborhood(slug);
  if (!n) return null;

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
        name: n.name,
        item: `https://tokyoitine.com/neighborhoods/${n.slug}`,
      },
    ],
  };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = getNeighborhood(slug);
  if (!neighborhood) notFound();

  const destinationSchema = getNeighborhoodSchema(slug);
  const breadcrumbSchema = getBreadcrumbSchema(slug);

  return (
    <>
      {destinationSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(destinationSchema),
          }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
      <div className="bg-[#FAFAFA] min-h-screen">
        <NeighborhoodNav currentSlug={slug} />
        <NeighborhoodBreadcrumb neighborhoodName={neighborhood.name} />
        <NeighborhoodHero neighborhood={neighborhood} />
        <WhatToDo
          activities={neighborhood.activities}
          color={neighborhood.color}
        />
        <WhereToEat
          restaurants={neighborhood.restaurants}
          color={neighborhood.color}
        />
        <GettingThere
          transit={neighborhood.transit}
          color={neighborhood.color}
        />
        <TimingCard
          timing={neighborhood.timing}
          color={neighborhood.color}
        />
        <ItineraryLink neighborhood={neighborhood} />
        <Footer />
      </div>
    </>
  );
}
