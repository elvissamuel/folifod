export const PROJECTS_SECTION = {
  eyebrow: "Our Projects",
  heading: "Proven Performance. Trusted Results.",
  description: {
    before: "For over a decade, ",
    highlight: "Folifod Integrated Services Limited",
    highlightHref: "/about-us",
    after:
      " has successfully executed engineering, fabrication, and quality management projects across Nigeria's Oil & Gas and Marine Industries.",
  },
} as const;

export type ProjectImageCard = {
  type: "image";
  id: string;
  title: string;
  client: string;
  image: string;
  overlay: "bottom" | "center";
  gridClassName: string;
};

export type ProjectSolidCard = {
  type: "solid";
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  panelClassName: string;
  gridClassName: string;
  showArrow?: boolean;
};

export type ProjectCard = ProjectImageCard | ProjectSolidCard;

export const PROJECT_CARDS: ProjectCard[] = [
  {
    type: "image",
    id: "storage-tank",
    title: "Storage Tank Inspection",
    client: "Smithpack/Gladex Dynamic resources",
    image: "/performance-img-1.jpg",
    overlay: "center",
    gridClassName:
      "md:col-span-5 md:col-start-8 md:row-start-1 min-h-[220px] md:min-h-0",
  },
  {
    type: "solid",
    id: "more-projects",
    title: "MORE PROJECTS",
    href: "/projects",
    panelClassName: "bg-[#0a6578]",
    showArrow: true,
    gridClassName:
      "md:col-span-3 md:col-start-1 md:row-start-1 min-h-[180px] md:min-h-0",
  },
  {
    type: "image",
    id: "flowline",
    title: "Flowline Leak Repair and Replacement",
    client: "NEPL/NDWestern JV",
    image: "/performance-img-2.jpg",
    overlay: "bottom",
    gridClassName:
      "md:col-span-4 md:col-start-4 md:row-start-1 md:row-span-3 min-h-[300px] md:min-h-0",
  },
  {
    type: "image",
    id: "power-plant",
    title: "Power Plant Installation",
    client: "Gladex Dynamic Resources Limited",
    image: "/Service Image 3.png",
    overlay: "bottom",
    gridClassName:
      "md:col-span-3 md:col-start-1 md:row-start-3 min-h-[150px] md:min-h-0",
  },
  {
    type: "solid",
    id: "epc",
    title: "Engineering, Procurement and Construction",
    subtitle: "Xylem Integrated International Limited",
    href: "/projects/epc",
    panelClassName:
      "bg-gradient-to-br from-[#00b8e8] via-[#00aeef] to-[#0099d6]",
    gridClassName:
      "md:col-span-5 md:col-start-8 md:row-start-2 md:row-span-2 min-h-[260px] md:min-h-0",
  },
];
