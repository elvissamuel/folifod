import { SERVICES_SECTION } from "@/constants/services";

export function ServicesSectionHeader() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#00aeef]">
        {SERVICES_SECTION.eyebrow}
      </p>
      <h2
        id="services-heading"
        className="mt-3 text-2xl font-bold leading-tight text-[#1a1a1a] sm:text-3xl lg:text-[2rem] lg:leading-[1.25]"
      >
        {SERVICES_SECTION.heading}
      </h2>
    </header>
  );
}
