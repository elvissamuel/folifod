import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/constants/site";
import { SERVICE_DETAILS, getServiceBySlug } from "@/constants/service-details";
import { getServicePageDetailBySlug } from "@/constants/service-pages";
import { SiteShell } from "@/components/layouts/site-shell";
import { ServicesSection } from "@/components/sections/services/services-section";
import { ProjectsPageCallbackMapSection } from "@/components/sections/projects-page/projects-page-callback-map-section";
import { ServiceDetailHero } from "@/components/sections/service-detail/service-detail-hero";
import { ServiceDetailIntroSection } from "@/components/sections/service-detail/service-detail-intro-section";
import { ServiceDetailFocusSection } from "@/components/sections/service-detail/service-detail-focus-section";
import { ServiceDetailInspectionSection } from "@/components/sections/service-detail/service-detail-inspection-section";
import { ServiceDetailTrainingSection } from "@/components/sections/service-detail/service-detail-training-section";
import { BuildCtaSection } from "@/components/sections/build-cta/build-cta-section";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `Services | ${SITE.title}` };
  }

  return {
    title: `${service.title} | ${SITE.title}`,
    description: `${service.heading} at Folifod Integrated Services Limited.`,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const servicePage = getServicePageDetailBySlug(slug);

  if (!service || !servicePage) {
    notFound();
  }

  return (
    <SiteShell>
      <ServiceDetailHero
        title={servicePage.heroTitle}
        backgroundImage={servicePage.heroImage}
        breadcrumbLabel={servicePage.breadcrumbLabel}
      />
      <ServiceDetailIntroSection
        eyebrow={servicePage.intro.eyebrow}
        heading={servicePage.intro.heading}
        description={servicePage.intro.description}
        image={servicePage.intro.image}
        imageAlt={servicePage.intro.imageAlt}
      />
      {slug === "inspection" && servicePage.inspectionContent ? (
        <ServiceDetailInspectionSection
          qa={servicePage.inspectionContent.qa}
          assurance={servicePage.inspectionContent.assurance}
        />
      ) : slug === "training" && servicePage.trainingContent ? (
        <ServiceDetailTrainingSection
          philosophy={servicePage.trainingContent.philosophy}
          flagship={servicePage.trainingContent.flagship}
          offerings={servicePage.trainingContent.offerings}
          commitment={servicePage.trainingContent.commitment}
        />
      ) : (
        <ServiceDetailFocusSection
          eyebrow={servicePage.focus.eyebrow}
          heading={servicePage.focus.heading}
          cards={servicePage.focus.cards}
        />
      )}
      <ServicesSection />
      <ProjectsPageCallbackMapSection />
      <BuildCtaSection />
    </SiteShell>
  );
}
