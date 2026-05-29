import { CalendarIcon } from "@/components/shared/icons";

type UpdateMetaRowProps = {
  date: string;
  meta: string;
};

export function UpdateMetaRow({ date, meta }: UpdateMetaRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="inline-flex items-center gap-1.5 font-medium text-[#1a4a7a]">
        <CalendarIcon className="h-4 w-4 shrink-0 text-[#00aeef]" />
        {date}
      </span>
      <span className="text-right text-[13px] text-[#8a8a8a]">{meta}</span>
    </div>
  );
}
