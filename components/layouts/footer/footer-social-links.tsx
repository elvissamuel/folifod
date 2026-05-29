import Link from "next/link";
import { FOOTER } from "@/constants/footer";
import { FacebookIcon, XIcon, YouTubeIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

const variantStyles = {
  white: "bg-white",
  facebook: "bg-[#1877f2]",
  youtube: "bg-[#ff0000]",
  twitter: "bg-[#55acee]",
} as const;

export function FooterSocialLinks() {
  return (
    <ul className="mt-4 flex items-center gap-3" aria-label="Social media">
      {FOOTER.social.map((social) => (
        <li key={social.id}>
          <Link
            href={social.href}
            target={social.href === "#" ? undefined : "_blank"}
            rel={social.href === "#" ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-90",
              variantStyles[social.variant],
            )}
          >
            {social.variant === "facebook" && (
              <FacebookIcon className="h-4 w-4 text-white" />
            )}
            {social.variant === "youtube" && (
              <YouTubeIcon className="h-4 w-4 text-white" />
            )}
            {social.variant === "twitter" && (
              <XIcon className="h-3.5 w-3.5 text-white" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
