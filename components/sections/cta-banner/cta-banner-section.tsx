import { CtaBannerCallback } from "@/components/sections/cta-banner/cta-banner-callback";
import { CtaBannerLearnMore } from "@/components/sections/cta-banner/cta-banner-learn-more";

export function CtaBannerSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#005a71]"
      aria-label="Contact call to action"
    >
      <div className="relative z-10 mx-auto flex justify-center gap-12 w-full max-w-7xl flex-col lg:min-h-[176px] lg:flex-row lg:items-center">
        <div className="flex items-center px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-10">
          <CtaBannerLearnMore />
        </div>

        <div className="flex items-stretch justify-center px-6 pb-10 sm:px-8 lg:px-0 lg:py-0">
          <CtaBannerCallback />
        </div>
      </div>
    </section>
  );
}
