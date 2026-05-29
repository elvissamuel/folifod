import Image from "next/image";
import { Container } from "@/components/shared/container";
import { ABOUT_US_INTRO } from "@/constants/about-us";

export function AboutUsIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef4fa] py-14 sm:py-16 lg:py-20" aria-labelledby="about-intro-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-75" sizes="100vw" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1a4a7a]">
              {ABOUT_US_INTRO.eyebrow}
            </p>
            <h2
              id="about-intro-heading"
              className="mt-2 max-w-xl text-4xl font-bold leading-tight text-[#00aeef]"
            >
              {ABOUT_US_INTRO.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#4e4e4e]">
              {ABOUT_US_INTRO.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={ABOUT_US_INTRO.image.src}
              alt={ABOUT_US_INTRO.image.alt}
              width={560}
              height={460}
              className="h-auto w-full max-w-[520px]"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
