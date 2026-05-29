import { FOOTER } from "@/constants/footer";
import { FooterSocialLinks } from "@/components/layouts/footer/footer-social-links";

export function FooterOfficialInfo() {
  return (
    <div>
      <h2 className="text-base font-bold text-white sm:text-lg">
        {FOOTER.officialInfoHeading}
      </h2>
      <FooterSocialLinks />
    </div>
  );
}
