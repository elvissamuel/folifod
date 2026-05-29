import { TRUSTED_PARTNERS_SECTION } from "@/constants/trusted-partners";

export function TrustedPartnersHeader() {
  return (
    <header className="text-center">
      <h2
        id="trusted-partners-heading"
        className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
      >
        {TRUSTED_PARTNERS_SECTION.title}
      </h2>
      <p className="mt-2 text-base text-white/90 sm:text-lg">
        {TRUSTED_PARTNERS_SECTION.subtitle}
      </p>
    </header>
  );
}
