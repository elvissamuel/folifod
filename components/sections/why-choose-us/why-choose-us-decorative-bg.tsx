import Image from "next/image";
import { WHY_CHOOSE_US } from "@/constants/why-choose-us";

export function WhyChooseUsDecorativeBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-full">
        <Image
          src={WHY_CHOOSE_US.backgroundShape}
          alt=""
          width={1920}
          height={280}
          className="h-auto w-full min-w-[800px] object-contain opacity-90 sm:min-w-0"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
