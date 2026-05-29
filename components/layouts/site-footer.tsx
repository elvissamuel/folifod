import { FOOTER } from "@/constants/footer";
import { Container } from "@/components/shared/container";
import { FooterAddressPhones } from "@/components/layouts/footer/footer-address-phones";
import { FooterEmail } from "@/components/layouts/footer/footer-email";
import { FooterLogo } from "@/components/layouts/footer/footer-logo";
import { FooterOfficialInfo } from "@/components/layouts/footer/footer-official-info";

export function SiteFooter() {
  return (
    <footer className="bg-[#00aeef] text-white">
      <Container className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="flex flex-col items-center text-center">
          <FooterLogo />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white sm:mt-4 sm:text-[15px] sm:leading-7">
            {FOOTER.description}
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center gap-16 lg:flex-row lg:justify-center lg:mt-8">
          <FooterOfficialInfo />
          <FooterAddressPhones />
          <FooterEmail />
        </div>
      </Container>
    </footer>
  );
}
