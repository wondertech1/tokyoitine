import type { Metadata } from "next";
import PageContent from "@/components/shared/PageContent";

export const metadata: Metadata = {
  title: "Tokyo Itinerary 2026 \u2014 1 to 7 Day Plans, Locally Audited",
  description:
    "Plan your perfect Tokyo trip from 1 to 7 days. 32 stops, 42 restaurant picks, every train timed. Field-tested by locals for 2026. Free printable plans.",
  keywords: [
    "Tokyo itinerary",
    "Tokyo travel plan",
    "Tokyo trip planner",
    "things to do in Tokyo",
    "Tokyo guide 2026",
  ],
  alternates: {
    canonical: "https://tokyoitine.com",
  },
  openGraph: {
    title: "Tokyo Itinerary 2026 \u2014 Your Perfect Plan from 1 to 7 Days",
    description:
      "32 stops. 42 restaurant picks. Every train timed. Locally audited Tokyo itineraries for 2026.",
    url: "https://tokyoitine.com",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Tokyo Itinerary 2026",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many days do you need in Tokyo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3-4 days covers central Tokyo\u2019s highlights (Asakusa, Shibuya, Harajuku, Shinjuku, Tsukiji, Ginza, Ueno, Akihabara). 5-6 days lets you add day trips to Kamakura or Nikko. 7 days gives you time for hidden neighborhoods like Shimokitazawa and Kichijoji.",
      },
    },
    {
      "@type": "Question",
      name: "What should I book in advance for Tokyo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book Shibuya Sky 1-2 weeks ahead (sunset slots sell out fast), teamLab Planets 2-4 weeks ahead, and the Ghibli Museum 2-3 months ahead via lottery through Lawson. Everything else in Tokyo is walkup-friendly.",
      },
    },
    {
      "@type": "Question",
      name: "Is the JR Pass worth it for Tokyo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Tokyo-only trips, no. A digital Suica card is cheaper and simpler. The JR Pass (\u00a550,000 for 7 days) only makes sense if you\u2019re adding day trips to Kamakura and Nikko, or traveling to other cities like Kyoto or Osaka.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best area to stay in Tokyo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shinjuku is the best base for first-timers \u2014 central hub for the JR Yamanote Line, easy access to all neighborhoods, and packed with restaurants and nightlife. Shibuya is great for younger travelers. Asakusa is best for traditional atmosphere on a budget.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a day in Tokyo cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Budget: \u00a57,000-12,500 ($47-83 USD) including food, transport, and one activity. Mid-range: \u00a514,500-23,500 ($97-157 USD). Food is where Tokyo shines \u2014 incredible meals start at \u00a5800 for ramen or \u00a51,500 for a lunch set.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageContent initialDays={3} isDurationPage={false} />
    </>
  );
}
