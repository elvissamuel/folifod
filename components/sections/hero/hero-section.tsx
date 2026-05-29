import Image from "next/image";
import { Container } from "@/components/shared/container";
import { HeroContent } from "@/components/sections/hero/hero-content";

export function HeroSection() {
  return (
    <section
      className="relative -mt-9 overflow-hidden bg-[#00aeef] sm:-mt-10 lg:-mt-11 lg:min-h-[620px]"
      aria-label="Hero"
    >
      {/* Right photo — visible strip only; anchor left so crop happens on the right */}
      <div className="absolute inset-y-0 left-[50%] right-0 z-0 hidden overflow-hidden lg:block">
        <Image
          src="/hero-bg-right.jpg"
          alt="Engineer performing maintenance on industrial oil and gas equipment"
          fill
          priority
          className="object-cover object-[left_center]"
          sizes="(max-width: 1024px) 100vw, 32vw"
        />
      </div>

      {/* Left decorative PNG — overlaps on top of the right image */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[80%] max-w-[920px] lg:block">
        <Image
          src="/hero-bg-left.png"
          alt=""
          fill
          priority
          aria-hidden
          className="object-cover object-left"
          sizes="68vw"
        />
      </div>

      {/* Hero copy — above both backgrounds */}
      <Container className="relative z-20 flex min-h-[460px] items-center pb-14 pt-28 sm:min-h-[540px] sm:pb-16 sm:pt-32 lg:min-h-[620px] lg:pb-20 lg:pt-36">
        {/* Mobile / tablet: left bg behind content only */}
        <div className="pointer-events-none absolute inset-0 z-0 lg:hidden">
          <Image
            src="/hero-bg-left.png"
            alt=""
            fill
            priority
            aria-hidden
            className="object-cover object-left"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto w-full max-w-3xl px-0 sm:px-2 lg:mx-0 lg:max-w-none lg:px-0 lg:-mt-20 lg:px-36">
          <HeroContent />
        </div>
      </Container>
    </section>
  );
}
