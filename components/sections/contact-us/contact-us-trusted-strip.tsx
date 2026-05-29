import Image from "next/image";
import { Container } from "@/components/shared/container";
import { PARTNER_LOGOS_ROW_ONE, PARTNER_LOGOS_ROW_TWO } from "@/constants/trusted-partners";

export function ContactUsTrustedStrip() {
  return (
    <section className="bg-[#f3f3f3] py-12 sm:py-14" aria-labelledby="trusted-strip-heading">
      <Container>
        <h2
          id="trusted-strip-heading"
          className="text-center text-4xl font-bold leading-tight text-[#b8b8b8]"
        >
          Trusted by
          <br />
          Industry Leaders
        </h2>

        <div className="mx-auto mt-8 max-w-5xl space-y-6">
          <ul className="flex flex-wrap items-center justify-center">
            {PARTNER_LOGOS_ROW_ONE.map((logo, index) => (
              <li key={logo.id} className="flex items-center">
                {index > 0 ? (
                  <span
                    className="mx-5 hidden h-8 w-px bg-[#d9d9d9] sm:inline-block"
                    aria-hidden
                  />
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

          <ul className="flex flex-wrap items-center justify-center">
            {PARTNER_LOGOS_ROW_TWO.map((logo, index) => (
              <li key={logo.id} className="flex items-center">
                {index > 0 ? (
                  <span
                    className="mx-5 hidden h-8 w-px bg-[#d9d9d9] sm:inline-block"
                    aria-hidden
                  />
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
        </div>
      </Container>
    </section>
  );
}
