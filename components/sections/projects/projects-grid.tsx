import { PROJECT_CARDS } from "@/constants/projects";
import { ProjectCard } from "@/components/sections/projects/project-card";

export function ProjectsGrid() {
  const cardsById = Object.fromEntries(PROJECT_CARDS.map((card) => [card.id, card]));
  const storageTank = cardsById["storage-tank"];
  const moreProjects = cardsById["more-projects"];
  const flowline = cardsById["flowline"];
  const powerPlant = cardsById["power-plant"];
  const epc = cardsById["epc"];

  if (!storageTank || !moreProjects || !flowline || !powerPlant || !epc) {
    return null;
  }

  return (
    <ul className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[300px_220px] lg:gap-0">
      <ProjectCard
        card={moreProjects}
        useCardGridClassName={false}
        className="min-h-[180px] overflow-hidden rounded-none md:col-span-1 lg:col-span-3 lg:col-start-5 lg:row-start-1 lg:self-end"
      />
      <ProjectCard
        card={storageTank}
        useCardGridClassName={false}
        className="min-h-[240px] overflow-hidden rounded-none md:col-span-1 lg:col-span-5 lg:col-start-8 lg:row-start-1"
      />
      <ProjectCard
        card={powerPlant}
        useCardGridClassName={false}
        className="min-h-[180px] overflow-hidden rounded-none md:col-span-1 lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:self-end"
      />
      <ProjectCard
        card={flowline}
        useCardGridClassName={false}
        className="min-h-[220px] overflow-hidden rounded-none md:col-span-1 lg:col-span-4 lg:col-start-4 lg:row-start-2"
      />
      <ProjectCard
        card={epc}
        useCardGridClassName={false}
        className="min-h-[220px] overflow-hidden rounded-none md:col-span-2 lg:col-span-5 lg:col-start-8 lg:row-start-2"
      />
    </ul>
  );
}
