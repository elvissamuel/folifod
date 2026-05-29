import { Container } from "@/components/shared/container";
import { PROJECTS_PAGE_CALLBACK } from "@/constants/projects-page";
import { CONTACT_US_MAP } from "@/constants/contact-us";

function CallbackFormCard() {
  return (
    <div className="rounded-sm bg-[#00aeef] px-7 py-7 text-white shadow-[0_14px_36px_rgba(0,0,0,0.2)]">
      <h3 className="text-center text-2xl font-bold leading-tight">
        {PROJECTS_PAGE_CALLBACK.cardTitle}
      </h3>
      <p className="mt-1 text-center text-sm text-white/90">
        {PROJECTS_PAGE_CALLBACK.cardSubtitle}
      </p>
      <form className="mt-6 space-y-2.5" action="#" method="post">
        <input
          aria-label={PROJECTS_PAGE_CALLBACK.fields.name}
          placeholder={PROJECTS_PAGE_CALLBACK.fields.name}
          className="h-11 w-full border border-white/60 bg-transparent px-3 text-sm text-white placeholder:text-white/80 outline-none"
        />
        <input
          aria-label={PROJECTS_PAGE_CALLBACK.fields.email}
          placeholder={PROJECTS_PAGE_CALLBACK.fields.email}
          className="h-11 w-full border border-white/60 bg-transparent px-3 text-sm text-white placeholder:text-white/80 outline-none"
        />
        <input
          aria-label={PROJECTS_PAGE_CALLBACK.fields.phone}
          placeholder={PROJECTS_PAGE_CALLBACK.fields.phone}
          className="h-11 w-full border border-white/60 bg-transparent px-3 text-sm text-white placeholder:text-white/80 outline-none"
        />
        <textarea
          aria-label={PROJECTS_PAGE_CALLBACK.fields.description}
          placeholder={PROJECTS_PAGE_CALLBACK.fields.description}
          rows={4}
          className="w-full resize-none border border-white/60 bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/80 outline-none"
        />
        <button
          type="submit"
          className="mt-1 inline-flex h-11 w-full items-center justify-center bg-white text-xs font-bold tracking-[0.08em] text-[#5422a5]"
        >
          {PROJECTS_PAGE_CALLBACK.button}
        </button>
      </form>
    </div>
  );
}

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
            <CallbackFormCard />
          </div>

          <div className="absolute top-[-40px] right-8 z-20 hidden w-[360px] lg:block">
            <CallbackFormCard />
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
