import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { SiteShell } from "@/components/layouts/site-shell";
import { UpdatesSection } from "@/components/sections/updates/updates-section";
import { AboutUsHero } from "@/components/sections/about-us/about-us-hero";
import { AboutUsIntroSection } from "@/components/sections/about-us/about-us-intro-section";
import { AboutUsTrustedMissionSection } from "@/components/sections/about-us/about-us-trusted-mission-section";
import { AboutUsValuesSection } from "@/components/sections/about-us/about-us-values-section";
import { BuildCtaSection } from "@/components/sections/build-cta/build-cta-section";

export const metadata: Metadata = {
  title: `About Us | ${SITE.title}`,
  description:
    "Learn about Folifod Integrated Services Limited, our mission, vision, and core values.",
};

export default function AboutUsPage() {
  return (
    <SiteShell>
      <AboutUsHero />
      <AboutUsIntroSection />
      <AboutUsTrustedMissionSection />
      <AboutUsValuesSection />
      <UpdatesSection />
      <BuildCtaSection />

    </SiteShell>
  );
}
