import type { UpdateCategory } from "@/constants/updates";

type UpdateBadgeProps = {
  category: UpdateCategory;
  className?: string;
};

export function UpdateBadge({ category, className = "" }: UpdateBadgeProps) {
  return (
    <span
      className={`inline-block bg-[#1a3d6e] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:text-[11px] ${className}`}
    >
      {category}
    </span>
  );
}
