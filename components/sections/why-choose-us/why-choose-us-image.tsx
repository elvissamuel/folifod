import Image from "next/image";
import { WHY_CHOOSE_US } from "@/constants/why-choose-us";

export function WhyChooseUsImage() {
  const { src, alt } = WHY_CHOOSE_US.image;

  return (
    <div className="relative z-10 flex justify-center lg:justify-end">
      <Image
        src={src}
        alt={alt}
        width={440}
        height={480}
        className="h-auto w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[360px]"
        sizes="(max-width: 1024px) 70vw, 360px"
      />
    </div>
  );
}
