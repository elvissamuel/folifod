import { FOOTER } from "@/constants/footer";
import { HomeIcon, PhoneIcon } from "@/components/shared/icons";

export function FooterAddressPhones() {
  return (
    <div>
      <div className="flex items-start gap-3">
        <HomeIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />
        <address className="not-italic text-sm leading-relaxed text-white sm:text-[15px]">
          {FOOTER.address.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>

      <div className="mt-6 flex items-start gap-3">
        <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />
        <div className="space-y-1 text-sm text-white sm:text-[15px]">
          {FOOTER.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="block transition-opacity hover:opacity-85"
            >
              {phone}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
