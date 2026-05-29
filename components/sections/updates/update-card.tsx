import Image from "next/image";
import Link from "next/link";
import type { StandardUpdate } from "@/constants/updates";
import { UpdateBadge } from "@/components/sections/updates/update-badge";
import { UpdateMetaRow } from "@/components/sections/updates/update-meta-row";

type UpdateCardProps = {
  update: StandardUpdate;
};

export function UpdateCard({ update }: UpdateCardProps) {
  return (
    <article className="flex flex-col">
      <Link href={update.href} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={update.image}
            alt={update.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 30vw"
          />
          <UpdateBadge
            category={update.category}
            className="absolute left-0 top-0 rounded-none rounded-br-sm"
          />
        </div>
      </Link>

      <div className="mt-4 space-y-3">
        <UpdateMetaRow date={update.date} meta={update.meta} />
        <h3 className="text-base font-bold leading-snug text-[#1a1a1a] sm:text-lg">
          <Link
            href={update.href}
            className="transition-colors hover:text-[#00aeef]"
          >
            {update.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}
