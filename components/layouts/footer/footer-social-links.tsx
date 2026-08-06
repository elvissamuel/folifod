import { FOOTER } from "@/constants/footer";
import { FacebookIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

const variantStyles = {
  linkedin: "bg-[#0a66c2]",
  facebook: "bg-[#1877f2]",
  youtube: "bg-[#ff0000]",
  twitter: "bg-[#55acee]",
} as const;

export function FooterSocialLinks() {
  return (
    <ul className="mt-4 flex items-center gap-3" aria-label="Social media">
      {FOOTER.social.map((social) => (
        <li key={social.id}>
          <span
            aria-disabled="true"
            aria-label={`${social.label} (unavailable)`}
            className={cn(
              "flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full opacity-60",
              variantStyles[social.variant],
            )}
          >
            {social.variant === "linkedin" && (
              <LinkedInIcon className="h-4 w-4 text-white" />
            )}
            {social.variant === "facebook" && (
              <FacebookIcon className="h-4 w-4 text-white" />
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
