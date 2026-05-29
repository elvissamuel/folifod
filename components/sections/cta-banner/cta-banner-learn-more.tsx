import Image from "next/image";
import Link from "next/link";
import { CTA_BANNER } from "@/constants/cta-banner";

export function CtaBannerLearnMore() {
  const { title, subtitle, cta } = CTA_BANNER.learnMore;

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
      <Image
        src="/call.png"
        alt=""
        width={64}
        height={64}
        className="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
      />

      <div>
        <h2 className="text-xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-1 text-sm text-white/85 sm:text-base">{subtitle}</p>
        <Link
          href={cta.href}
          className="mt-5 inline-block border-2 border-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#0a6578]"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}
