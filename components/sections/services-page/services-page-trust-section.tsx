import { Container } from "@/components/shared/container";
import { SERVICES_PAGE_TRUST } from "@/constants/services-page";

export function ServicesPageTrustSection() {
  const [firstRow, secondRow] = [
    SERVICES_PAGE_TRUST.pillars.slice(0, 3),
    SERVICES_PAGE_TRUST.pillars.slice(3),
  ];

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="services-trust-heading">
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1a4a7a]">
            {SERVICES_PAGE_TRUST.eyebrow}
          </p>
          <h2
            id="services-trust-heading"
            className="mt-2 text-4xl font-bold leading-tight text-[#00aeef]"
          >
            {SERVICES_PAGE_TRUST.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#5a5a5a]">
            {SERVICES_PAGE_TRUST.description}
          </p>
        </header>

        <div className="mt-10 space-y-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {firstRow.map((pillar) => (
              <article key={pillar.title} className="text-center">
                <h3 className="text-2xl font-bold text-[#00aeef]">{pillar.title}</h3>
                <p className="mx-auto mt-2 max-w-[240px] text-[14px] leading-6 text-[#4f4f4f]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:mx-auto sm:max-w-3xl sm:grid-cols-2">
            {secondRow.map((pillar) => (
              <article key={pillar.title} className="text-center">
                <h3 className="text-2xl font-bold text-[#00aeef]">{pillar.title}</h3>
                <p className="mx-auto mt-2 max-w-[260px] text-[14px] leading-6 text-[#4f4f4f]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
