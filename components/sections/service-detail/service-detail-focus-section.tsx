import { Container } from "@/components/shared/container";

type FocusCard = {
  title: string;
  className: string;
};

type ServiceDetailFocusSectionProps = {
  eyebrow: string;
  heading: string;
  cards: FocusCard[];
};

export function ServiceDetailFocusSection({
  eyebrow,
  heading,
  cards,
}: ServiceDetailFocusSectionProps) {
  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-[url('/Shape.png')] bg-cover bg-center opacity-25" aria-hidden />
      <Container className="relative z-10">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1a4a7a]">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a]">{heading}</h2>
        </header>

        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch">
          {cards.map((card) => {
            const isLongCopy = card.title.length > 90;

            return (
              <li
                key={card.title}
                  className={`relative flex h-[220px] flex-col overflow-hidden rounded-md px-6 py-7 text-center text-white ${isLongCopy ? "sm:h-[260px]" : "sm:h-[220px]"} ${card.className}`}
              >
                <div className="absolute inset-0 bg-[url('/Shape.png')] bg-cover bg-center opacity-20" aria-hidden />
                <div className="relative z-10 flex flex-1 items-center justify-center overflow-y-auto">
                  <h3
                    className={
                      isLongCopy
                        ? "text-[13px] font-semibold leading-6"
                        : "text-[1.5rem] font-bold leading-tight"
                    }
                  >
                    {card.title}
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
