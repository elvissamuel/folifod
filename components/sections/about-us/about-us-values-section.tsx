import Image from "next/image";
import { Container } from "@/components/shared/container";
import { ABOUT_US_VALUES } from "@/constants/about-us";

export function AboutUsValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f2f6fb] py-14 sm:py-16 lg:py-20" aria-labelledby="about-values-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-70" sizes="100vw" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={ABOUT_US_VALUES.image.src}
              alt={ABOUT_US_VALUES.image.alt}
              width={560}
              height={460}
              className="h-auto w-full max-w-[520px]"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1a4a7a]">
              {ABOUT_US_VALUES.eyebrow}
            </p>
            <h2 id="about-values-heading" className="mt-2 text-4xl font-bold leading-tight text-[#00aeef]">
              {ABOUT_US_VALUES.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#505050]">
              {ABOUT_US_VALUES.description}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {ABOUT_US_VALUES.items.map((value) => (
                <article key={value.title}>
                  <h3 className="text-3xl font-bold leading-tight text-[#1a1a1a]">{value.title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-[#4f4f4f]">{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
