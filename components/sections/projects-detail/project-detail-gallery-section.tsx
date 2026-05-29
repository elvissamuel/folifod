import Image from "next/image";
import { Container } from "@/components/shared/container";

type ProjectDetailGallerySectionProps = {
  title: string;
  images: string[];
};

export function ProjectDetailGallerySection({ title, images }: ProjectDetailGallerySectionProps) {
  const [img1, img2, img3, img4, img5, img6, img7] = images;
  const safe = images.filter(Boolean) as string[];

  if (safe.length < 4) {
    return null;
  }

  if (safe.length === 4) {
    return (
      <section className="bg-[#f3f3f3] pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 lg:px-32">
            <div className="grid grid-cols-1 gap-3 md:col-span-5 md:grid-rows-[220px_120px]">
              <div className="relative min-h-[220px] overflow-hidden rounded-sm">
                <Image
                  src={img1}
                  alt={`${title} gallery image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative min-h-[120px] overflow-hidden rounded-sm">
                  <Image
                    src={img3}
                    alt={`${title} gallery image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 16vw"
                  />
                </div>
                <div className="relative min-h-[120px] overflow-hidden rounded-sm">
                  <Image
                    src={img4}
                    alt={`${title} gallery image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 16vw"
                  />
                </div>
              </div>
            </div>

            <div className="relative min-h-[343px] overflow-hidden rounded-sm md:col-span-7 md:min-h-[343px]">
              <Image
                src={img2}
                alt={`${title} gallery image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (safe.length === 5) {
    return (
      <section className="bg-[#f3f3f3] pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 lg:px-32">
            <div className="grid grid-cols-1 gap-3 md:col-span-5 md:grid-rows-[250px_140px]">
              <div className="relative min-h-[250px] overflow-hidden rounded-sm">
                <Image
                  src={img1}
                  alt={`${title} gallery image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative min-h-[140px] overflow-hidden rounded-sm">
                  <Image
                    src={img3}
                    alt={`${title} gallery image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 16vw"
                  />
                </div>
                <div className="relative min-h-[140px] overflow-hidden rounded-sm">
                  <Image
                    src={img4}
                    alt={`${title} gallery image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 16vw"
                  />
                </div>
              </div>
            </div>

            <div className="relative min-h-[395px] overflow-hidden rounded-sm md:col-span-7 md:min-h-[395px]">
              <Image
                src={img2}
                alt={`${title} gallery image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-[#f3f3f3] pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 lg:px-32">
            <div className="grid grid-cols-1 gap-3 md:col-span-5 md:grid-rows-[260px_130px]">
              <div className="relative min-h-[260px] overflow-hidden rounded-sm">
                <Image
                  src={img1}
                  alt={`${title} gallery image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative min-h-[130px] overflow-hidden rounded-sm">
                  <Image
                    src={img3}
                    alt={`${title} gallery image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 16vw"
                  />
                </div>
                <div className="relative min-h-[130px] overflow-hidden rounded-sm">
                  <Image
                    src={img4}
                    alt={`${title} gallery image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 16vw"
                  />
                </div>
              </div>
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-sm md:col-span-7 md:min-h-[390px]">
              <Image
                src={img2}
                alt={`${title} gallery image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:px-32">
            <div className="relative min-h-[185px] overflow-hidden rounded-sm sm:min-h-[185px]">
              <Image src={img5} alt={`${title} gallery image`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
            </div>
            <div className="relative min-h-[185px] overflow-hidden rounded-sm sm:min-h-[185px]">
              <Image src={img6} alt={`${title} gallery image`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
            </div>
            <div className="relative min-h-[185px] overflow-hidden rounded-sm sm:min-h-[185px]">
              <Image src={img7} alt={`${title} gallery image`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
