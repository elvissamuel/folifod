import Image from "next/image";
import { Container } from "@/components/shared/container";
import { ABOUT_US_MISSION_VISION } from "@/constants/about-us";
import { PARTNER_LOGOS_ROW_ONE, PARTNER_LOGOS_ROW_TWO } from "@/constants/trusted-partners";

const logoRows = [PARTNER_LOGOS_ROW_ONE, PARTNER_LOGOS_ROW_TWO] as const;

export function AboutUsTrustedMissionSection() {
  return (
    <section className="relative bg-[#f3f3f3] pt-12 sm:pt-14" aria-labelledby="about-trusted-heading">
      <Container>
        <h2 id="about-trusted-heading" className="text-center text-4xl font-bold leading-tight text-[#b8b8b8]">
          Trusted by
          <br />
          Industry Leaders
        </h2>

        <div className="mx-auto mt-8 max-w-5xl space-y-6">
          {logoRows.map((row, rowIndex) => (
            <ul key={rowIndex} className="flex flex-wrap items-center justify-center">
              {row.map((logo, index) => (
                <li key={logo.id} className="flex items-center">
                  {index > 0 ? (
                    <span className="mx-5 hidden h-8 w-px bg-[#d9d9d9] sm:inline-block" aria-hidden />
                  ) : null}
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto w-auto max-h-11 max-w-[130px] object-contain sm:max-h-12 sm:max-w-[150px]"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Container>

      <div className="relative mt-10 w-full bg-white pb-14 sm:pb-16 lg:pb-20">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-40 w-screen -translate-x-1/2 -translate-y-1/2 bg-[#005A7D]"
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-5xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-10 lg:gap-28 mt-10">
            {ABOUT_US_MISSION_VISION.map((item) => (
              <article
                key={item.id}
                className="flex aspect-square w-full max-w-[280px] flex-col items-center justify-center bg-gradient-to-b from-[#00B5F9] to-[#005A7D] px-2 py-7 text-center text-white shadow-[0_12px_32px_rgba(0,0,0,0.22)] sm:max-w-[300px] lg:max-w-[320px]"
              >
                <div className="flex justify-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={60}
                    height={60}
                    className="h-auto w-auto object-contain"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.12em]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[240px] text-sm leading-6 text-white/95">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
