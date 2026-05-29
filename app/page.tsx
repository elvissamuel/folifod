import { SiteShell } from "@/components/layouts/site-shell";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us/why-choose-us-section";
import { CtaBannerSection } from "@/components/sections/cta-banner/cta-banner-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { VisionMissionSection } from "@/components/sections/vision-mission/vision-mission-section";
import { TrustedPartnersSection } from "@/components/sections/trusted-partners/trusted-partners-section";
import { UpdatesSection } from "@/components/sections/updates/updates-section";
import { BuildCtaSection } from "@/components/sections/build-cta/build-cta-section";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CtaBannerSection />
      <ProjectsSection />
      <VisionMissionSection />
      <TrustedPartnersSection />
      <UpdatesSection />
      <BuildCtaSection />
    </SiteShell>
  );
}
