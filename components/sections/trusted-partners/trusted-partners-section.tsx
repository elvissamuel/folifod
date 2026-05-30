import Image from "next/image";
import {
  PARTNER_LOGOS_ROW_ONE,
  PARTNER_LOGOS_ROW_TWO,
  TRUSTED_PARTNERS_SECTION,
} from "@/constants/trusted-partners";
import { Container } from "@/components/shared/container";
import { PartnerLogoRow } from "@/components/sections/trusted-partners/partner-logo-row";
import { TrustedPartnersHeader } from "@/components/sections/trusted-partners/trusted-partners-header";

export function TrustedPartnersSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="trusted-partners-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={TRUSTED_PARTNERS_SECTION.backgroundImage}
          alt=""
          fill
          priority={false}
          aria-hidden
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0b1f2e]/82" aria-hidden />
      </div>

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <TrustedPartnersHeader />

        <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12 lg:mt-16">
          <PartnerLogoRow logos={PARTNER_LOGOS_ROW_ONE} />
          <PartnerLogoRow
            logos={PARTNER_LOGOS_ROW_TWO}
            className="mx-auto max-w-3xl"
          />
        </div>
      </Container>
    </section>
  );
}
