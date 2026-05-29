import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { SiteShell } from "@/components/layouts/site-shell";
import { ContactUsHero } from "@/components/sections/contact-us/contact-us-hero";
import { ContactUsFormSection } from "@/components/sections/contact-us/contact-us-form-section";
import { ContactUsTrustedStrip } from "@/components/sections/contact-us/contact-us-trusted-strip";
import { ContactUsMapStrip } from "@/components/sections/contact-us/contact-us-map-strip";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE.title}`,
  description:
    "Get in touch with Folifod Integrated Services Limited for engineering, fabrication, and project support inquiries.",
};

export default function ContactUsPage() {
  return (
    <SiteShell>
      <ContactUsHero />
      <ContactUsFormSection />
      <ContactUsTrustedStrip />
      <ContactUsMapStrip />
    </SiteShell>
  );
}
