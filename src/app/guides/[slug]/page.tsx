import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, getAllGuideSlugs } from "@/data/guides";
import GuideNav from "@/components/guides/GuideNav";
import GuideBreadcrumb from "@/components/guides/GuideBreadcrumb";
import GuideHero from "@/components/guides/GuideHero";
import GuideSection from "@/components/guides/GuideSection";
import GuideBlockRenderer from "@/components/guides/GuideBlockRenderer";
import RelatedGuides from "@/components/guides/RelatedGuides";
import BackToItinerary from "@/components/guides/BackToItinerary";
import Footer from "@/components/footer/Footer";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: {
      canonical: `https://tokyoitine.com/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.ogTitle,
      description: guide.metaDescription,
      url: `https://tokyoitine.com/guides/${guide.slug}`,
      images: [
        {
          url: `/og/guides/${guide.slug}.png`,
          width: 1200,
          height: 630,
          alt: guide.metaTitle,
        },
      ],
    },
  };
}

function getGuideSchema(slug: string) {
  const guide = getGuide(slug);
  if (!guide) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    author: {
      "@type": "Organization",
      name: "Tokyo Itinerary",
    },
    dateModified: "2026-03-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tokyoitine.com/guides/${slug}`,
    },
  };
}

function getBreadcrumbSchema(slug: string) {
  const guide = getGuide(slug);
  if (!guide) return null;

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
        name: guide.title,
        item: `https://tokyoitine.com/guides/${slug}`,
      },
    ],
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const articleSchema = getGuideSchema(slug);
  const breadcrumbSchema = getBreadcrumbSchema(slug);

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
      <div className="bg-[#FAFAFA] min-h-screen">
        <GuideNav />
        <GuideBreadcrumb guideTitle={guide.title} />
        <GuideHero guide={guide} />

        {guide.sections.map((section) => (
          <GuideSection
            key={section.id}
            id={section.id}
            label={section.label}
            title={section.title}
          >
            <GuideBlockRenderer blocks={section.content} />
          </GuideSection>
        ))}

        <RelatedGuides slugs={guide.relatedGuides} />
        <BackToItinerary />
        <Footer />
      </div>
    </>
  );
}
