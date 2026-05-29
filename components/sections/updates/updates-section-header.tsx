import Link from "next/link";
import { UPDATES_SECTION } from "@/constants/updates";

export function UpdatesSectionHeader() {
  const { eyebrow, heading, moreUpdates } = UPDATES_SECTION;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <header>
        <p className="text-sm font-semibold text-[#00aeef]">{eyebrow}</p>
        <h2
          id="updates-heading"
          className="mt-1 text-2xl font-bold leading-tight text-[#1a1a1a] sm:text-3xl lg:text-[2rem]"
        >
          {heading}
        </h2>
      </header>

      <Link
        href={moreUpdates.href}
        className="inline-flex shrink-0 items-center justify-center self-start rounded-md bg-[#00aeef] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#0098d4] sm:mt-1"
      >
        {moreUpdates.label}
      </Link>
    </div>
  );
}
