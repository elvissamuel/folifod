import Image from "next/image";
import { Container } from "@/components/shared/container";

type ServiceDetailInspectionSectionProps = {
  qa: {
    eyebrow: string;
    heading: string;
    description: string;
    highlights: string[];
  };
  assurance: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
  };
};

export function ServiceDetailInspectionSection({
  qa,
  assurance,
}: ServiceDetailInspectionSectionProps) {
  return (
    <>
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold text-[#1a4a7a]">{qa.eyebrow}</p>
            <h2 className="mt-2 text-4xl font-bold leading-tight text-[#00aeef]">{qa.heading}</h2>
            <p className="mt-4 text-[14px] leading-7 text-[#4f4f4f]">{qa.description}</p>
          </header>

          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-5 text-center sm:grid-cols-3">
            {qa.highlights.map((item) => (
              <li key={item} className="text-[1.1rem] font-bold leading-snug text-[#00aeef]">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative bg-[#eef3f8] py-12 sm:py-14">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-60" sizes="100vw" />
        </div>
        <Container className="relative z-10">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 py-7 sm:px-8 md:grid-cols-2">
            <div className="flex justify-center md:justify-start">
              <Image
                src={assurance.image}
                alt={assurance.imageAlt}
                width={360}
                height={280}
                className="h-auto w-full max-w-[320px]"
                sizes="(max-width: 768px) 90vw, 320px"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8ca0b3]">
                {assurance.eyebrow}
              </p>
              <h3 className="mt-1 text-3xl font-bold leading-tight text-[#1c1c1c]">
                {assurance.heading}
              </h3>
              <div className="mt-3 space-y-3 text-[14px] leading-7 text-[#4f4f4f]">
                {assurance.description.split("\n").map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
