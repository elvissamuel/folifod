import Image from "next/image";
import Link from "next/link";
import { BUILD_CTA } from "@/constants/build-cta";
import { Container } from "@/components/shared/container";

export function BuildCtaSection() {
  const { heading, subtitle, cta, backgroundImage } = BUILD_CTA;

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="build-cta-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          aria-hidden
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[#0a1520]/78"
          aria-hidden
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center sm:py-24 lg:py-28">
        <h2
          id="build-cta-heading"
          className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight"
        >
          {heading}
        </h2>
        <p className="mt-4 max-w-xl text-base text-white sm:mt-5 sm:text-lg">
          {subtitle}
        </p>
        <Link
          href={cta.href}
          className="mt-8 inline-block rounded-md bg-gradient-to-r from-[#00d4ff] via-[#00aeef] to-[#0088cc] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90 sm:mt-10"
        >
          {cta.label}
        </Link>
      </Container>
    </section>
  );
}
