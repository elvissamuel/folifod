import { Container } from "@/components/shared/container";
import { CONTACT_US_CARDS, CONTACT_US_FORM } from "@/constants/contact-us";
import { ContactUsForm } from "@/components/sections/contact-us/contact-us-form";
import { ContactUsInfoCard } from "@/components/sections/contact-us/contact-us-info-card";

export function ContactUsFormSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="contact-form-title">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
          <div className="space-y-4">
            {CONTACT_US_CARDS.map((card) => (
              <ContactUsInfoCard
                key={card.id}
                type={card.id}
                title={card.title}
                lines={card.lines}
              />
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold text-[#00aeef]">{CONTACT_US_FORM.eyebrow}</p>
            <h2
              id="contact-form-title"
              className="mt-1 text-3xl font-bold leading-tight text-[#00aeef]"
            >
              {CONTACT_US_FORM.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#555]">
              {CONTACT_US_FORM.description}
            </p>

            <div className="mt-6">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
