import Link from "next/link";
import { PROJECTS_SECTION } from "@/constants/projects";

export function ProjectsSectionHeader() {
  const { eyebrow, heading, description } = PROJECTS_SECTION;

  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold text-[#1a4a7a]">{eyebrow}</p>
      <h2
        id="projects-heading"
        className="mt-2 text-2xl font-bold leading-tight text-[#1a1a1a] sm:text-3xl lg:text-4xl"
      >
        {heading}
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-[#5c5c5c] sm:text-base sm:leading-7">
        {description.before}
        <Link
          href={description.highlightHref}
          className="font-medium text-[#00aeef] transition-colors hover:text-[#0090c8]"
        >
          {description.highlight}
        </Link>
        {description.after}
      </p>
    </header>
  );
}
