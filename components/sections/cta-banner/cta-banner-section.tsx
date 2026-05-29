import { CtaBannerCallback } from "@/components/sections/cta-banner/cta-banner-callback";
import { CtaBannerLearnMore } from "@/components/sections/cta-banner/cta-banner-learn-more";

export function CtaBannerSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a6578]"
      aria-label="Contact call to action"
    >
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden>
        <Image
          src="/Shape.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div> */}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:flex-row lg:items-stretch lg:justify-center lg:px-8">
        <div className="py-12 sm:py-14 lg:py-16">
          <CtaBannerLearnMore />
        </div>

        {/* <div
          className="my-8 hidden w-px shrink-0 border-l border-dotted border-white/50 lg:my-4 lg:block"
          aria-hidden
        /> */}

        {/* <div className="h-px w-full shrink-0 border-t border-dotted border-white/50 lg:hidden" /> */}

        <div className="mt-8 w-full pb-12 sm:pb-14 lg:mt-0 lg:w-[38%] lg:self-stretch lg:pb-0 xl:w-[36%]">
          <CtaBannerCallback />
        </div>
      </div>
    </section>
  );
}
