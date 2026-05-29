import Image from "next/image";
import { CTA_BANNER } from "@/constants/cta-banner";

export function CtaBannerCallback() {
  const { label, phone, phoneDisplay } = CTA_BANNER.callback;

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-6 py-8 text-center sm:px-10 sm:py-6">
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[280px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00b8e8] to-transparent opacity-90 blur-sm"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/call-plus.png"
          alt=""
          width={64}
          height={64}
          className="h-12 w-16 sm:h-16 sm:w-16"
        />
        <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white">
          {label}
        </p>
        <a
          href={`tel:${phone}`}
          className="mt-2 text-2xl font-bold tracking-wide text-white transition-opacity hover:opacity-90 sm:text-3xl"
        >
          {phoneDisplay}
        </a>
      </div>
    </div>
  );
}
