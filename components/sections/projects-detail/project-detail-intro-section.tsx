import Image from "next/image";
import { Container } from "@/components/shared/container";

type ProjectDetailIntroSectionProps = {
  date: string;
  title: string;
  client: string;
  location: string;
  projectRef: string;
  service: string;
  introImage: string;
};

export function ProjectDetailIntroSection({
  date,
  title,
  client,
  location,
  projectRef,
  service,
  introImage,
}: ProjectDetailIntroSectionProps) {
  const clientLines = client.split("\n").filter(Boolean);
  const serviceLines = service.split("\n").filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-[#eef4fa] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-70" sizes="100vw" />
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <div>
            <p className="text-sm font-medium text-[#00aeef]">{date}</p>
            <h2 className="mt-2 text-3xl max-w-lg font-bold leading-tight text-[#00aeef]">
              Project: {title}
            </h2>
            <div className="mt-4 space-y-1 text-[14px] leading-7 text-[#4e4e4e]">
              {clientLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {location ? <p>{location}</p> : null}
              {projectRef ? <p>{projectRef}</p> : null}
              {serviceLines.map((line) => (
                <p key={line}>{line}</p>
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
