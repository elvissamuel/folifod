import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectImageCard } from "@/constants/projects";

type ProjectCardImageProps = {
  card: ProjectImageCard;
};

export function ProjectCardImage({ card }: ProjectCardImageProps) {
  const isCenterOverlay = card.overlay === "center";

  return (
    <article className="group relative h-full min-h-[inherit] overflow-hidden">
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div
        className={cn(
          "absolute inset-0",
          isCenterOverlay
            ? "bg-black/35"
            : "bg-gradient-to-t from-black/75 via-black/25 to-transparent",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-5 text-white sm:p-6",
          isCenterOverlay && "justify-center items-end text-right pr-8 sm:pr-12",
        )}
      >
        <h3
          className={cn(
            "font-bold leading-snug",
            isCenterOverlay ? "max-w-xs text-xl sm:text-2xl" : "text-base sm:text-lg",
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "mt-1 text-white/90",
            isCenterOverlay ? "text-sm sm:text-base" : "text-xs sm:text-sm",
          )}
        >
          {card.client}
        </p>
      </div>
    </article>
  );
}
