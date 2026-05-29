import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PartnerLogo } from "@/constants/trusted-partners";

type PartnerLogoProps = {
  logo: PartnerLogo;
};

export function PartnerLogo({ logo }: PartnerLogoProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        logo.whiteBox && "rounded-sm bg-white px-5 py-3 shadow-sm sm:px-6 sm:py-3.5",
      )}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className={cn(
          "h-auto w-auto max-w-[90px] object-contain sm:max-w-none",
          logo.whiteBox ? "max-h-10 sm:max-h-12" : "max-h-8 sm:max-h-10",
        )}
      />
    </div>
  );
}
