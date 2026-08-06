import Image from "next/image";
import { Container } from "@/components/shared/container";
import { ABOUT_US_MISSION_VISION } from "@/constants/about-us";
import { PARTNER_LOGOS_ROW_ONE, PARTNER_LOGOS_ROW_TWO } from "@/constants/trusted-partners";
import { cn } from "@/lib/utils";

const logoRows = [PARTNER_LOGOS_ROW_ONE, PARTNER_LOGOS_ROW_TWO] as const;

export function AboutUsTrustedMissionSection() {
  return (
    <section className="relative pt-12 sm:pt-14" aria-labelledby="about-trusted-heading">
      <Container>
        <h2
          id="about-trusted-heading"
          className="text-center text-3xl font-bold leading-tight text-[#C2C2C2] sm:text-4xl"
        >
          Trusted by
          <br />
          Industry Leaders
        </h2>

        <div className="mx-auto mt-6 max-w-5xl space-y-8 sm:mt-8 sm:space-y-6">
          {logoRows.map((row, rowIndex) => (
            <ul
              key={rowIndex}
              className={cn(
                "grid grid-cols-2 justify-items-center gap-x-4 gap-y-7 px-1",
                "sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-y-0 sm:px-0",
                rowIndex === 1 && "sm:mx-auto sm:max-w-3xl",
              )}
            >
              {row.map((logo, index) => (
                <li
                  key={logo.id}
                  className={cn(
                    "flex w-full max-w-[148px] items-center justify-center sm:w-auto sm:max-w-none",
                    row.length === 3 && index === 2 && "col-span-2 sm:col-span-1",
                  )}
                >
                  {index > 0 ? (
                    <span
                      className="mx-5 hidden h-8 w-px shrink-0 bg-[#d9d9d9] sm:inline-block"
                      aria-hidden
                    />
                  ) : null}
                  <div
                    className={cn(
                      "flex h-14 w-full items-center justify-center",
                      logo.whiteBox && "rounded-sm bg-white px-3 py-2.5 shadow-sm sm:px-5 sm:py-3",
                    )}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className="h-auto w-auto max-h-9 max-w-[108px] object-contain sm:max-h-12 sm:max-w-[150px]"
                    />
                  </div>
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

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 mt-10 grid w-full grid-cols-1 items-stretch justify-items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
            {ABOUT_US_MISSION_VISION.map((item) => (
              <article
                key={item.id}
                className="flex h-[340px] w-full max-w-[420px] flex-col overflow-hidden bg-gradient-to-b from-[#00B5F9] to-[#005A7D] px-4 py-6 text-center text-white shadow-[0_12px_32px_rgba(0,0,0,0.22)] sm:h-[420px] md:h-full md:min-h-[320px]"
              >
                <div className="flex min-h-0 flex-1 flex-col items-center">
                  <div className="flex shrink-0 justify-center">
                    <Image
                      src={item.icon}
                      alt=""
                      width={60}
                      height={60}
                      className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 shrink-0 text-xs font-semibold uppercase tracking-[0.12em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 min-h-0 w-full flex-1 overflow-y-auto text-xs leading-5 text-white/95 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
