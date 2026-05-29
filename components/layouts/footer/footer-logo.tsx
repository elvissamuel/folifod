import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/constants/site";

export function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center justify-center">
      <Image
        src={SITE.logos.white}
        alt={SITE.title}
        width={240}
        height={64}
        className="h-14 w-auto sm:h-16"
      />
    </Link>
  );
}
