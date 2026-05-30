import { CONTACT, SOCIAL_LINKS } from "@/constants/site";
import { Container } from "@/components/shared/container";
import {
  FacebookIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinterestIcon,
  XIcon,
} from "@/components/shared/icons";

const socialIconMap = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  pinterest: PinterestIcon,
  x: XIcon,
} as const;

export function TopBar() {
  return (
    <div className="relative z-0 border-b border-[#e8e8e8] bg-[#f5f5f5] text-[13px] text-[#4a4a4a]">
      <Container className="flex min-h-20 flex-wrap items-center justify-between gap-3 py-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-[#00aeef]"
          >
            <MailIcon className="h-4 w-4 shrink-0 text-[#00aeef]" />
            <span>{CONTACT.email}</span>
          </a>
          <div className="inline-flex items-center gap-2">
            <PhoneIcon className="h-4 w-4 shrink-0 text-[#00aeef]" />
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {CONTACT.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-[#00aeef]"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-medium text-[#1a1a1a]">Follow Us:</span>
          <ul className="flex items-center gap-2.5" aria-label="Social media">
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <li key={social.label}>
                  <span
                    aria-disabled="true"
                    aria-label={`${social.label} (unavailable)`}
                    className="flex h-7 w-7 cursor-not-allowed items-center justify-center rounded-full text-[#4a4a4a] opacity-60"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
}
