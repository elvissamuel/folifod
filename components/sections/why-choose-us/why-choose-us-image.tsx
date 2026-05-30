import Image from "next/image";
import { WHY_CHOOSE_US } from "@/constants/why-choose-us";

export function WhyChooseUsImage() {
  const { src, alt } = WHY_CHOOSE_US.image;

  return (
    <div className="relative z-10 flex justify-center lg:justify-end">
      <Image
        src={src}
        alt={alt}
        width={560}
        height={620}
        className="h-auto w-full max-w-[320px] sm:max-w-md lg:max-w-lg"
        sizes="(max-width: 1024px) 90vw, 560px"
      />
    </div>
  );
}
