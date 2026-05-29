import Image from "next/image";

type ServiceCardImageProps = {
  src: string;
  alt: string;
};

export function ServiceCardImage({ src, alt }: ServiceCardImageProps) {
  return (
    <div className="relative min-h-[280px] flex-1 h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover h-full w-full"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
}
