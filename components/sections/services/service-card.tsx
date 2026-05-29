import type { ServiceItem } from "@/constants/services";
import { ServiceCardImage } from "@/components/sections/services/service-card-image";
import { ServiceCardPanel } from "@/components/sections/services/service-card-panel";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const panel = (
    <ServiceCardPanel
      title={service.title}
      href={service.href}
      panelClassName={service.panelClassName}
    />
  );

  const image = (
    <ServiceCardImage src={service.image} alt={service.title} />
  );

  return (
    <article className="flex min-h-[336px] flex-col overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:min-h-[380px] sm:rounded-3xl lg:min-h-[400px]">
      {service.textPosition === "top" ? (
        <>
        <div className="basis-[20%] grow-0 shrink-0">
        {panel}
        </div>
          <div className="basis-[80%] grow-0 shrink-0">
            {image}
          </div>
        </>
      ) : (
        <>
        <div className="basis-[80%] grow-0 shrink-0">
          {image}
        </div>
          <div className="basis-[20%] grow-0 shrink-0">
            {panel}
          </div>
        </>
      )}
    </article>
  );
}
