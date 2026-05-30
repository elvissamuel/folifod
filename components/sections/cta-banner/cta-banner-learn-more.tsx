import Image from "next/image";
import Link from "next/link";
import { CTA_BANNER } from "@/constants/cta-banner";

export function CtaBannerLearnMore() {
  const { title, subtitle, cta } = CTA_BANNER.learnMore;

  return (
    <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
      <Image
        src="/call.png"
        alt=""
        width={72}
        height={72}
        className="h-14 w-auto shrink-0 sm:h-[4.5rem]"
        aria-hidden
      />

      <div>
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-[2rem] lg:text-[2.125rem]">
          {title}
        </h2>
        <p className="mt-1.5 text-sm font-normal text-white sm:text-base">{subtitle}</p>
        <Link
          href={cta.href}
          className="mt-5 inline-block border border-white bg-transparent px-7 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}
