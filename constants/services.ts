export type ServiceTextPosition = "top" | "bottom";

export type ServiceItem = {
  id: string;
  title: string;
  href: string;
  image: string;
  textPosition: ServiceTextPosition;
  panelClassName: string;
};

export const SERVICES_SECTION = {
  eyebrow: "Our Services",
  heading:
    "Comprehensive solutions tailored for Oil & Gas and Marine operations",
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "epc",
    title: "FOLIFOD EPC",
    href: "/services/epc",
    image: "/Service Image 1.png",
    textPosition: "top",
    panelClassName:
      "bg-gradient-to-b from-[#2d9fd4] via-[#1f7fa8] to-[#3d8fad]",
  },
  {
    id: "maintenance",
    title: "FOLIFOD MAINTENANCE",
    href: "/services/maintenance",
    image: "/Service Image 2.png",
    textPosition: "bottom",
    panelClassName: "bg-[#6ec8e8]",
  },
  {
    id: "inspection",
    title: "FOLIFOD INSPECTION",
    href: "/services/inspection",
    image: "/Service Image 3.png",
    textPosition: "top",
    panelClassName:
      "bg-gradient-to-b from-[#45b8b0] via-[#3a8f96] to-[#4a6575]",
  },
  {
    id: "training",
    title: "FOLIFOD TRAINING",
    href: "/services/training",
    image: "/Service Image 4.png",
    textPosition: "bottom",
    panelClassName:
      "bg-gradient-to-t from-[#5a8fa8] via-[#4aadd6] to-[#5eb8e0]",
  },
];
