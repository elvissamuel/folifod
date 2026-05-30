import Image from "next/image";
import type { StandardUpdate } from "@/constants/updates";
import { UpdateBadge } from "@/components/sections/updates/update-badge";
import { UpdateMetaRow } from "@/components/sections/updates/update-meta-row";

type UpdateCardProps = {
  update: StandardUpdate;
};

export function UpdateCard({ update }: UpdateCardProps) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={update.image}
          alt={update.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 30vw"
        />
        <UpdateBadge
          category={update.category}
          className="absolute left-0 top-0 rounded-none rounded-br-sm"
        />
      </div>

      <div className="mt-4 space-y-3">
        <UpdateMetaRow date={update.date} meta={update.meta} />
        <h3 className="text-base font-bold leading-snug text-[#1a1a1a] sm:text-lg">{update.title}</h3>
      </div>
    </article>
  );
}
