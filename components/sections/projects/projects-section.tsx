import { Container } from "@/components/shared/container";
import { ProjectsGrid } from "@/components/sections/projects/projects-grid";
import { ProjectsSectionHeader } from "@/components/sections/projects/projects-section-header";

export function ProjectsSection() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <Container>
        <ProjectsSectionHeader />
        <ProjectsGrid />
      </Container>
    </section>
  );
}
