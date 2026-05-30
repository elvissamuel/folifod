import Image from "next/image";
import { CTA_BANNER } from "@/constants/cta-banner";

export function CtaBannerCallback() {
  const { label, phone, phoneDisplay } = CTA_BANNER.callback;

  return (
    <div className="flex h-full w-full min-h-[200px] min-w-[260px] max-w-[320px] flex-col items-center justify-center bg-gradient-to-r from-[#00c8f5] via-[#00aee8] to-[#0078b5] px-8 py-10 text-center text-white lg:min-h-full lg:w-[300px] lg:max-w-none lg:py-8">
      <Image
        src="/call-plus.png"
        alt=""
        width={72}
        height={72}
        className="h-14 w-auto sm:h-16"
        aria-hidden
      />
      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
        {label}
      </p>
      <a
        href={`tel:${phone}`}
        className="mt-2 text-[1.65rem] font-bold leading-tight tracking-wide text-white transition-opacity hover:opacity-90 sm:text-[1.85rem]"
      >
        {phoneDisplay}
      </a>
    </div>
  );
}
