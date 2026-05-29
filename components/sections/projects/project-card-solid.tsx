import Link from "next/link";
import type { ProjectSolidCard } from "@/constants/projects";

type ProjectCardSolidProps = {
  card: ProjectSolidCard;
};

export function ProjectCardSolid({ card }: ProjectCardSolidProps) {
  return (
    <Link
      href={card.href}
      className={`flex h-full min-h-[inherit] flex-col items-center justify-center px-6 py-10 text-center text-white transition-opacity hover:opacity-95 ${card.panelClassName}`}
    >
      <span className="text-lg font-bold uppercase tracking-wide sm:text-xl">
        {card.title}
      </span>
      {card.subtitle ? (
        <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-white/95 sm:text-base">
          {card.subtitle}
        </p>
      ) : null}
      {card.showArrow ? (
        <span className="mt-4 text-2xl font-light leading-none" aria-hidden>
          →
        </span>
      ) : null}
    </Link>
  );
}
