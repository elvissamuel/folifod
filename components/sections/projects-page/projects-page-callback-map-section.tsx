import { Container } from "@/components/shared/container";
import { PROJECTS_PAGE_CALLBACK } from "@/constants/projects-page";
import { CONTACT_US_MAP } from "@/constants/contact-us";
import { ProjectsPageCallbackFormCard } from "@/components/sections/projects-page/projects-page-callback-form-card";

export function ProjectsPageCallbackMapSection() {
  return (
    <section className="relative">
      <div className="relative bg-white pb-20 pt-10 sm:pb-24 sm:pt-14">
        <Container className="relative">
          <div className="max-w-lg lg:pr-[20px]">
            <p className="text-sm font-medium text-[#00aeef]">{PROJECTS_PAGE_CALLBACK.eyebrow}</p>
            <h2 className="mt-1 whitespace-pre-line text-[2.1rem] font-bold leading-tight text-[#151515]">
              {PROJECTS_PAGE_CALLBACK.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#4e4e4e]">
              {PROJECTS_PAGE_CALLBACK.description}
            </p>
          </div>

          <div className="mt-8 max-w-md lg:hidden">
            <ProjectsPageCallbackFormCard />
          </div>

          <div className="absolute top-[-40px] right-8 z-20 hidden w-[360px] lg:block">
            <ProjectsPageCallbackFormCard />
          </div>
        </Container>
      </div>

      <div className="relative h-[240px] w-full overflow-hidden sm:h-[300px]">
        <iframe
          title={CONTACT_US_MAP.title}
          src={CONTACT_US_MAP.embedUrl}
          className="h-full w-full border-0 grayscale-[0.35] brightness-[0.58] contrast-[1.08]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
