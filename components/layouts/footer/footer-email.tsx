import { FOOTER } from "@/constants/footer";
import { MailIcon } from "@/components/shared/icons";

export function FooterEmail() {
  return (
    <div className="flex items-start gap-3">
      <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />
      <a
        href={`mailto:${FOOTER.email}`}
        className="text-sm text-white transition-opacity hover:opacity-85 sm:text-[15px]"
      >
        {FOOTER.email}
      </a>
    </div>
  );
}
