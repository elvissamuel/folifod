import { CONTACT_US_MAP } from "@/constants/contact-us";

export function ContactUsMapStrip() {
  return (
    <section className="relative h-[210px] w-full overflow-hidden sm:h-[240px]" aria-label={CONTACT_US_MAP.title}>
      <iframe
        title={CONTACT_US_MAP.title}
        src={CONTACT_US_MAP.embedUrl}
        className="h-full w-full border-0 grayscale-[0.35] brightness-[0.58] contrast-[1.08]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
