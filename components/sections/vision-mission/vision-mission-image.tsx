import Image from "next/image";
import { VISION_MISSION } from "@/constants/vision-mission";

export function VisionMissionImage() {
  const { src, alt } = VISION_MISSION.image;

  return (
    <div className="relative z-10 flex justify-center lg:justify-start">
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
