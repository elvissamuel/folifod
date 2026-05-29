import type { ProjectCard as ProjectCardType } from "@/constants/projects";
import { ProjectCardImage } from "@/components/sections/projects/project-card-image";
import { ProjectCardSolid } from "@/components/sections/projects/project-card-solid";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  card: ProjectCardType;
  className?: string;
  useCardGridClassName?: boolean;
};

export function ProjectCard({
  card,
  className,
  useCardGridClassName = true,
}: ProjectCardProps) {
  return (
    <li className={cn("relative", useCardGridClassName && card.gridClassName, className)}>
      {card.type === "image" ? (
        <ProjectCardImage card={card} />
      ) : (
        <ProjectCardSolid card={card} />
      )}
    </li>
  );
}
