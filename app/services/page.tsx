import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { SiteShell } from "@/components/layouts/site-shell";
import { ServicesSection } from "@/components/sections/services/services-section";
import { UpdatesSection } from "@/components/sections/updates/updates-section";
import { ServicesPageHero } from "@/components/sections/services-page/services-page-hero";
import { ServicesPageExperienceSection } from "@/components/sections/services-page/services-page-experience-section";
import { ServicesPageTrustSection } from "@/components/sections/services-page/services-page-trust-section";
import { BuildCtaSection } from "@/components/sections/build-cta/build-cta-section";

export const metadata: Metadata = {
  title: `Services | ${SITE.title}`,
  description:
    "Explore Folifod Integrated Services Limited engineering, inspection, maintenance, and training services.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <ServicesPageHero />
      <ServicesSection />
      <ServicesPageExperienceSection />
      <ServicesPageTrustSection />
      <UpdatesSection />
      <BuildCtaSection />
    </SiteShell>
  );
}
