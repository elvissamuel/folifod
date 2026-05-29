import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ProjectDetailGallerySection } from "@/components/sections/projects-detail/project-detail-gallery-section";

type ServiceDetailTrainingSectionProps = {
  philosophy: {
    eyebrow: string;
    heading: string;
    description: string;
    cards: {
      title: string;
      className: string;
    }[];
  };
  flagship: {
    eyebrow: string;
    heading: string;
    description: string;
    points: string[];
    ctaLabel: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
    galleryImages: string[];
  };
  offerings: {
    heading: string;
    items: string[];
  };
  commitment: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
  };
};

export function ServiceDetailTrainingSection({
  philosophy,
  flagship,
  offerings,
  commitment,
}: ServiceDetailTrainingSectionProps) {
  return (
    <>
      <section className="relative bg-[#eaf1f7] py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-75" sizes="100vw" />
        </div>
        <Container className="relative z-10">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1a4a7a]">{philosophy.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a]">{philosophy.heading}</h2>
            <p className="mt-4 text-[14px] leading-7 text-[#4f4f4f]">{philosophy.description}</p>
          </header>

          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {philosophy.cards.map((card) => (
              <li key={card.title} className={`rounded-md px-6 py-7 text-center text-white ${card.className}`}>
                <h3 className="text-[2rem] font-bold leading-tight">{card.title}</h3>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#eef4fa] py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-70" sizes="100vw" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1a4a7a]">{flagship.eyebrow}</p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-[#1a1a1a]">{flagship.heading}</h2>
              <p className="mt-4 text-[14px] leading-7 text-[#4f4f4f]">{flagship.description}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-[14px] leading-7 text-[#4f4f4f]">
                {flagship.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link
                href={flagship.ctaHref}
                className="mt-6 inline-flex rounded-sm bg-[#153a70] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#122f59]"
              >
                {flagship.ctaLabel}
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src={flagship.image}
                alt={flagship.imageAlt}
                width={520}
                height={400}
                className="h-auto w-full max-w-[500px]"
                sizes="(max-width: 1024px) 90vw, 500px"
              />
            </div>
          </div>
        </Container>
      </section>

      <ProjectDetailGallerySection title={flagship.heading} images={flagship.galleryImages} />

      <section className="relative bg-white py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-60" sizes="100vw" />
        </div>
        <Container className="relative z-10">
          <header className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold leading-tight text-[#00aeef]">{offerings.heading}</h2>
          </header>

          <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-5 text-center sm:grid-cols-3">
            {offerings.items.map((item) => (
              <li key={item} className="text-[14px] font-semibold leading-6 text-[#2f2f2f]">
                {item}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-center gap-8 bg-[#e8eef4] px-6 py-7 sm:px-8 md:grid-cols-2">
            <div className="flex justify-center md:justify-start">
              <Image
                src={commitment.image}
                alt={commitment.imageAlt}
                width={360}
                height={280}
                className="h-auto w-full max-w-[320px]"
                sizes="(max-width: 768px) 90vw, 320px"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8ca0b3]">{commitment.eyebrow}</p>
              <h3 className="mt-1 text-3xl font-bold leading-tight text-[#1c1c1c]">{commitment.heading}</h3>
              <div className="mt-3 space-y-3 text-[14px] leading-7 text-[#4f4f4f]">
                {commitment.description.split("\n").map((line) => (
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
