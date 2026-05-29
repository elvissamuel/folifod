import { Container } from "@/components/shared/container";
import { PROJECTS_PAGE_CARDS, PROJECTS_PAGE_INTRO } from "@/constants/projects-page";
import { ProjectsPageCard } from "@/components/sections/projects-page/projects-page-card";

export function ProjectsPageGallerySection() {
  return (
    <section className="bg-[#f3f3f3] py-14 sm:py-16 lg:py-20" aria-labelledby="projects-page-heading">
      <Container>
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-[#00aeef]">{PROJECTS_PAGE_INTRO.eyebrow}</p>
          <h2 id="projects-page-heading" className="mt-2 text-4xl font-bold leading-tight text-[#00aeef]">
            {PROJECTS_PAGE_INTRO.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#4f4f4f]">
            {PROJECTS_PAGE_INTRO.description}
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {PROJECTS_PAGE_CARDS.map((card) => (
            <li key={card.id}>
              <ProjectsPageCard card={card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
