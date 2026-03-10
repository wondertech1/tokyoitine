import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getConnectorPage,
  getAllConnectorSlugs,
} from "@/data/connectors";
import GuideNav from "@/components/guides/GuideNav";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideBlockRenderer from "@/components/guides/GuideBlockRenderer";
import RelatedGuides from "@/components/guides/RelatedGuides";
import BackToItinerary from "@/components/guides/BackToItinerary";
import ConnectorBreadcrumb from "@/components/japan/ConnectorBreadcrumb";
import Footer from "@/components/footer/Footer";

export function generateStaticParams() {
  return getAllConnectorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getConnectorPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `https://tokyoitine.com/japan/${page.slug}`,
    },
    openGraph: {
      title: page.ogTitle,
      description: page.metaDescription,
      url: `https://tokyoitine.com/japan/${page.slug}`,
      images: [
        {
          url: `/og/japan/${page.slug}.png`,
          width: 1200,
          height: 630,
          alt: page.metaTitle,
        },
      ],
    },
  };
}

function getArticleSchema(slug: string) {
  const page = getConnectorPage(slug);
  if (!page) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    author: {
      "@type": "Organization",
      name: "Tokyo Itinerary",
    },
    dateModified: "2026-03-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tokyoitine.com/japan/${slug}`,
    },
  };
}

function getBreadcrumbSchema(slug: string) {
  const page = getConnectorPage(slug);
  if (!page) return null;

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
        name: "Japan Travel",
        item: "https://tokyoitine.com/japan",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `https://tokyoitine.com/japan/${slug}`,
      },
    ],
  };
}

function getTouristTripSchema(slug: string) {
  if (slug !== "2-week-japan-itinerary") return null;

  const page = getConnectorPage(slug);
  if (!page) return null;

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: page.title,
    description: page.metaDescription,
    touristType: "First-time Japan visitors",
    itinerary: {
      "@type": "ItemList",
      numberOfItems: 14,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Day 1: Tokyo — Electric Pulse" },
        { "@type": "ListItem", position: 2, name: "Day 2: Tokyo — Old World Zen" },
        { "@type": "ListItem", position: 3, name: "Day 3: Tokyo — Culture Circuit" },
        { "@type": "ListItem", position: 4, name: "Day 4: Tokyo — Imperial Calm" },
        { "@type": "ListItem", position: 5, name: "Day 5: Tokyo — Coastal Pilgrimage" },
        { "@type": "ListItem", position: 6, name: "Day 6: Tokyo → Kyoto (Shinkansen)" },
        { "@type": "ListItem", position: 7, name: "Day 7: Kyoto — Higashiyama" },
        { "@type": "ListItem", position: 8, name: "Day 8: Kyoto — Arashiyama" },
        { "@type": "ListItem", position: 9, name: "Day 9: Kyoto — Northern Temples" },
        { "@type": "ListItem", position: 10, name: "Day 10: Nara Day Trip" },
        { "@type": "ListItem", position: 11, name: "Day 11: Osaka — Dotonbori & Namba" },
        { "@type": "ListItem", position: 12, name: "Day 12: Osaka — Kuromon & Neighborhoods" },
        { "@type": "ListItem", position: 13, name: "Day 13: Osaka — Flex Day" },
        { "@type": "ListItem", position: 14, name: "Day 14: Departure from Kansai Airport" },
      ],
    },
  };
}

export default async function ConnectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getConnectorPage(slug);
  if (!page) notFound();

  const articleSchema = getArticleSchema(slug);
  const breadcrumbSchema = getBreadcrumbSchema(slug);
  const touristTripSchema = getTouristTripSchema(slug);

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
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
      {touristTripSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(touristTripSchema),
          }}
        />
      )}
      <div className="bg-[#FAFAFA] min-h-screen">
        <GuideNav />
        <ConnectorBreadcrumb pageTitle={page.title} />
        <GuideHero guide={page} />

        {page.sections.map((section) => (
          <GuideSection
            key={section.id}
            id={section.id}
            label={section.label}
            title={section.title}
          >
            <GuideBlockRenderer blocks={section.content} />
          </GuideSection>
        ))}

        <RelatedGuides slugs={page.relatedGuides} />
        <BackToItinerary />
        <Footer />
      </div>
    </>
  );
}
