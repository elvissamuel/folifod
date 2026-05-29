import type { PartnerLogo as PartnerLogoType } from "@/constants/trusted-partners";
import { PartnerLogo } from "@/components/sections/trusted-partners/partner-logo";
import { PartnerLogoDivider } from "@/components/sections/trusted-partners/partner-logo-divider";

type PartnerLogoRowProps = {
  logos: readonly PartnerLogoType[];
  className?: string;
};

export function PartnerLogoRow({ logos, className }: PartnerLogoRowProps) {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-0 ${className ?? ""}`}
    >
      {logos.map((logo, index) => (
        <li key={logo.id} className="flex items-center">
          {index > 0 ? <PartnerLogoDivider /> : null}
          <PartnerLogo logo={logo} />
        </li>
      ))}
    </ul>
  );
}
