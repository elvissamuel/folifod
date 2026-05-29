import { SERVICES } from "@/constants/services";
import { Container } from "@/components/shared/container";
import { ServiceCard } from "@/components/sections/services/service-card";
import { ServicesSectionHeader } from "@/components/sections/services/services-section-header";

export function ServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="services-heading">
      <Container>
        <ServicesSectionHeader />
      </Container>

      <div className="pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100vw-80rem)/2+2rem)]">
        <ul className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {SERVICES.map((service) => (
            <li key={service.id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
