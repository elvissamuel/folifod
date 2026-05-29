import Link from "next/link";
import type { ServiceItem } from "@/constants/services";

type ServiceCardPanelProps = Pick<ServiceItem, "title" | "href" | "panelClassName">;

export function ServiceCardPanel({
  title,
  href,
  panelClassName,
}: ServiceCardPanelProps) {
  return (
    <div
      className={`flex min-h-[168px] flex-1 flex-col justify-center px-6 py-7 sm:px-7 sm:py-8 ${panelClassName}`}
    >
      <h3 className="text-lg font-bold leading-snug tracking-wide text-white sm:text-xl">
        {title}
      </h3>
      <Link
        href={href}
        className="mt-3 inline-block w-fit text-xs font-medium uppercase tracking-[0.14em] text-white underline underline-offset-4 transition-opacity hover:opacity-85"
      >
        READ MORE
      </Link>
    </div>
  );
}
