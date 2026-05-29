import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/constants/site";

export function SiteLogo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src={SITE.logos.colored}
        alt={SITE.title}
        width={200}
        height={56}
        priority
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
