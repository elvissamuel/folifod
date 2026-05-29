import Link from "next/link";
import { HERO } from "@/constants/site";

export function HeroContent() {
  return (
    <div className="max-w-xl text-white">
      <p className="text-sm font-normal tracking-wide text-white/95 sm:text-[15px]">
        {HERO.eyebrow}
      </p>
      <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.25rem] lg:leading-[1.12]">
        {HERO.heading}
      </h1>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/90 sm:text-[15px] sm:leading-7">
        {HERO.description}
      </p>
      <Link
        href={HERO.cta.href}
        className="mt-4 inline-block border-2 border-white px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-[#00aeef]"
      >
        {HERO.cta.label}
      </Link>
    </div>
  );
}
