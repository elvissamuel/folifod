import { Container } from "@/components/shared/container";
import { WhyChooseUsContent } from "@/components/sections/why-choose-us/why-choose-us-content";
import { WhyChooseUsDecorativeBg } from "@/components/sections/why-choose-us/why-choose-us-decorative-bg";
import { WhyChooseUsImage } from "@/components/sections/why-choose-us/why-choose-us-image";

export function WhyChooseUsSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="why-choose-us-heading"
    >
      <WhyChooseUsDecorativeBg />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <WhyChooseUsContent />
          <WhyChooseUsImage />
        </div>
      </Container>
    </section>
  );
}
