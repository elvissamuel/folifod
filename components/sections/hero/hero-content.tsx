import Link from "next/link";
import { HERO } from "@/constants/site";

export function HeroContent() {
  return (
    <div className="max-w-xl text-white lg:max-w-xl">
      <p className="text-sm font-normal tracking-wide text-white sm:text-[15px] lg:text-white/95">
        {HERO.eyebrow}
      </p>
      <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.25rem] lg:leading-[1.12]">
        {HERO.heading}
      </h1>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-white sm:text-[15px] sm:leading-7 lg:text-white/90">
        {HERO.description}
      </p>
      <Link
        href={HERO.cta.href}
        className="mt-6 inline-block border-2 border-white bg-[#00aeef]/20 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition-colors hover:bg-white hover:text-[#00aeef] lg:mt-4 lg:bg-transparent lg:shadow-none"
      >
        {HERO.cta.label}
      </Link>
    </div>
  );
}
