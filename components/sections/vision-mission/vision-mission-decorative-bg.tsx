import Image from "next/image";
import { VISION_MISSION } from "@/constants/vision-mission";

export function VisionMissionDecorativeBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-[10%] top-1/2 w-[110%] max-w-none -translate-y-1/2 sm:left-0 sm:w-full">
        <Image
          src={VISION_MISSION.backgroundShape}
          alt=""
          width={1920}
          height={280}
          className="h-auto w-full min-w-[900px] object-contain opacity-80 sm:min-w-0"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
