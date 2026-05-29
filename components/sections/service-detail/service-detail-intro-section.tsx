import Image from "next/image";
import { Container } from "@/components/shared/container";

type ServiceDetailIntroSectionProps = {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function ServiceDetailIntroSection({
  eyebrow,
  heading,
  description,
  image,
  imageAlt,
}: ServiceDetailIntroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#eaf1f7] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src="/Shape.png" alt="" fill className="object-cover object-center opacity-75" sizes="100vw" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold text-[#00aeef]">{eyebrow}</p>
            <h2 className="mt-2 text-4xl font-bold leading-tight text-[#00aeef]">{heading}</h2>
            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#4f4f4f]">{description}</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={image}
              alt={imageAlt}
              width={520}
              height={430}
              className="h-auto w-full max-w-[500px]"
              sizes="(max-width: 1024px) 90vw, 500px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
