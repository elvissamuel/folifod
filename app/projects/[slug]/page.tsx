import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/constants/site";
import { PROJECT_DETAILS, getProjectDetailBySlug } from "@/constants/project-details";
import { SiteShell } from "@/components/layouts/site-shell";
import { ProjectDetailHero } from "@/components/sections/projects-detail/project-detail-hero";
import { ProjectDetailIntroSection } from "@/components/sections/projects-detail/project-detail-intro-section";
import { ProjectDetailGallerySection } from "@/components/sections/projects-detail/project-detail-gallery-section";
import { ProjectsPageCallbackMapSection } from "@/components/sections/projects-page/projects-page-callback-map-section";
import { BuildCtaSection } from "@/components/sections/build-cta/build-cta-section";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECT_DETAILS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetailBySlug(slug);

  if (!project) {
    return {
      title: `Project | ${SITE.title}`,
    };
  }

  return {
    title: `${project.title} | ${SITE.title}`,
    description: `Project details for ${project.title}.`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectDetailBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <ProjectDetailHero title={project.title} image={project.heroImage} />
      <ProjectDetailIntroSection
        date={project.date}
        title={project.title}
        client={project.client}
        location={project.location}
        projectRef={project.projectRef}
        service={project.service}
        introImage={project.introImage}
      />
      <ProjectDetailGallerySection title={project.title} images={project.galleryImages} />
      <ProjectsPageCallbackMapSection />
      <BuildCtaSection />
    </SiteShell>
  );
}
