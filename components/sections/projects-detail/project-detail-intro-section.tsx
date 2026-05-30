import Image from "next/image";
import { Container } from "@/components/shared/container";
import type { ProjectDetailSection } from "@/constants/project-details";

type ProjectDetailIntroSectionProps = {
  date: string;
  title: string;
  client: string;
  location: string;
  sections: ProjectDetailSection[];
  introImage: string;
};

function ProjectDetailSectionBlock({ section }: { section: ProjectDetailSection }) {
  if (section.type === "list") {
    return (
      <div className="space-y-1">
        <p>{section.label}:</p>
        {section.intro ? <p>{section.intro}</p> : null}
        <ul className="list-disc space-y-0.5 pl-5">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.stacked) {
    return (
      <div className="space-y-1">
        <p>{section.label}:</p>
        <p>{section.value}</p>
      </div>
    );
  }

  return (
    <p>
      {section.label}: {section.value}
    </p>
  );
}

export function ProjectDetailIntroSection({
  date,
  title,
  client,
  location,
  sections,
  introImage,
}: ProjectDetailIntroSectionProps) {
  const clientLines = client.split("\n").filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-[#eef4fa] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-70" sizes="100vw" />
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div>
            <p className="text-sm font-medium text-[#00aeef]">{date}</p>
            <h2 className="mt-2 max-w-lg text-3xl font-bold leading-tight text-[#00aeef]">
              Project: {title}
            </h2>
            <div className="mt-4 space-y-1 text-[14px] leading-7 text-[#4e4e4e]">
              {clientLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {location ? <p>{location}</p> : null}
              {sections.map((section) => (
                <ProjectDetailSectionBlock key={`${section.type}-${section.label}`} section={section} />
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={introImage}
              alt={title}
              width={560}
              height={460}
              className="h-auto w-full max-w-[520px]"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
