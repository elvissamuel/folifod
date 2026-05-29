import Link from "next/link";
import { VISION_MISSION } from "@/constants/vision-mission";

export function VisionMissionContent() {
  return (
    <div className="relative z-10">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1a4a7a] sm:text-[13px]">
        {VISION_MISSION.eyebrow}
      </p>

      <h2
        id="vision-mission-heading"
        className="mt-3 text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
      >
        {VISION_MISSION.heading}
      </h2>

      <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#5c5c5c] sm:text-base sm:leading-7">
        {VISION_MISSION.paragraphs.map((paragraph, index) => (
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

      <Link
        href={VISION_MISSION.cta.href}
        className="mt-10 inline-block rounded-md bg-[#00aeef] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#0098d4]"
      >
        {VISION_MISSION.cta.label}
      </Link>
    </div>
  );
}
