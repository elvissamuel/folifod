import Link from "next/link";
import { WHY_CHOOSE_US } from "@/constants/why-choose-us";
import { WhyChooseUsFeatures } from "@/components/sections/why-choose-us/why-choose-us-features";

export function WhyChooseUsContent() {
  return (
    <div className="relative z-10">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1a4a7a] sm:text-[13px]">
        {WHY_CHOOSE_US.eyebrow}
      </p>

      <h2
        id="why-choose-us-heading"
        className="mt-3 text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
      >
        {WHY_CHOOSE_US.headingPrefix}{" "}
        <span className="text-[#00aeef]">{WHY_CHOOSE_US.headingHighlight}</span>
      </h2>

      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#5c5c5c] sm:text-base sm:leading-7">
        {WHY_CHOOSE_US.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph.before}
            {paragraph.highlight ? (
              <span className="font-medium text-[#00aeef]">
                {paragraph.highlight}
              </span>
            ) : null}
            {paragraph.after}
          </p>
        ))}
      </div>

      <div className="mt-8">
        <WhyChooseUsFeatures />
      </div>

      <Link
        href={WHY_CHOOSE_US.cta.href}
        className="mt-10 inline-block rounded-md bg-[#1a3d6e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#15325a]"
      >
        {WHY_CHOOSE_US.cta.label}
      </Link>
    </div>
  );
}
