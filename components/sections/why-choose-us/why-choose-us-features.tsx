import { WHY_CHOOSE_US } from "@/constants/why-choose-us";
import { FeatureCheckIcon } from "@/components/sections/why-choose-us/feature-check-icon";

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <FeatureCheckIcon />
          <span className="text-[15px] font-semibold leading-snug text-[#3d3d3d]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function WhyChooseUsFeatures() {
  const { columnOne, columnTwo } = WHY_CHOOSE_US.features;

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10">
      <FeatureList items={columnOne} />
      <FeatureList items={columnTwo} />
    </div>
  );
}
