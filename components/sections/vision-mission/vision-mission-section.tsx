import { Container } from "@/components/shared/container";
import { VisionMissionContent } from "@/components/sections/vision-mission/vision-mission-content";
import { VisionMissionDecorativeBg } from "@/components/sections/vision-mission/vision-mission-decorative-bg";
import { VisionMissionImage } from "@/components/sections/vision-mission/vision-mission-image";

export function VisionMissionSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#eef6fb] py-16 sm:py-20 lg:py-24"
      aria-labelledby="vision-mission-heading"
    >
      <VisionMissionDecorativeBg />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <VisionMissionImage />
          <VisionMissionContent />
        </div>
      </Container>
    </section>
  );
}
