import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SERVICES_PAGE_EXPERIENCE } from "@/constants/services-page";

export function ServicesPageExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#eaf1f7] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-75" sizes="100vw" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1a4a7a]">
              {SERVICES_PAGE_EXPERIENCE.eyebrow}
            </p>
            <h2 className="mt-2 max-w-xl text-4xl font-bold leading-tight text-[#141414]">
              {SERVICES_PAGE_EXPERIENCE.heading}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#555]">
              {SERVICES_PAGE_EXPERIENCE.description}
            </p>
            <Link
              href={SERVICES_PAGE_EXPERIENCE.cta.href}
              className="mt-7 inline-flex rounded-sm bg-[#153a70] px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#122f59]"
            >
              {SERVICES_PAGE_EXPERIENCE.cta.label}
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={SERVICES_PAGE_EXPERIENCE.image.src}
              alt={SERVICES_PAGE_EXPERIENCE.image.alt}
              width={540}
              height={430}
              className="h-auto w-full max-w-[500px]"
              sizes="(max-width: 1024px) 90vw, 500px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
