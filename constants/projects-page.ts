export const PROJECTS_PAGE_HERO = {
  title: "Our Projects",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ],
  backgroundImage: "/hero-bg-right.jpg",
} as const;

export const PROJECTS_PAGE_INTRO = {
  eyebrow: "Projects we have worked on",
  heading: "Delivering Excellence Across Every Project",
  description:
    "At Folifod Integrated Services Limited, every project tells a story of precision, safety, and integrity. We have successfully executed a wide range of engineering, fabrication, and asset integrity projects for clients in the Oil & Gas and Marine industries.",
} as const;

export type ProjectsPageCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  panelClassName: string;
};

export const PROJECTS_PAGE_CARDS: ProjectsPageCard[] = [
  {
    id: "storage",
    title: "STORAGE TANK INSPECTION",
    subtitle: "FEBRUARY 2024",
    image: "/hero-bg-right.jpg",
    href: "/projects/storage-tank-inspection",
    panelClassName: "bg-gradient-to-r from-[#46c9ef] to-[#75d7f4]",
  },
  {
    id: "flowline",
    title: "FLOWLINE LEAK REPAIR AND REPLACEMENT",
    subtitle: "READ MORE",
    image: "/Service Image 1.png",
    href: "/projects/flowline-leak-repair",
    panelClassName: "bg-gradient-to-r from-[#6176aa] to-[#c9c4e8]",
  },
  {
    id: "epc",
    title: "ENGINEERING, PROCUREMENT AND CONSTRUCTION (EPC)",
    subtitle: "READ MORE",
    image: "/Service Image 2.png",
    href: "/projects/epc",
    panelClassName: "bg-gradient-to-r from-[#6578aa] to-[#cec7e9]",
  },
  {
    id: "leak-test",
    title: "LEAK TEST",
    subtitle: "READ MORE",
    image: "/Service Image 4.png",
    href: "/projects/leak-test",
    panelClassName: "bg-gradient-to-r from-[#43c3eb] to-[#64d2f2]",
  },
  {
    id: "power-plant",
    title: "POWER PLANT INSTALLATION",
    subtitle: "READ MORE",
    image: "/vision-img.png",
    href: "/projects/power-plant-installation",
    panelClassName: "bg-gradient-to-r from-[#45c8ef] to-[#69d3f2]",
  },
  {
    id: "umbilical",
    title: "FABRICATION OF 2 TOPSIDE UMBILICAL TERMINATION ASSEMBLY",
    subtitle: "READ MORE",
    image: "/choose-us-img.png",
    href: "/projects/topside-umbilical-termination",
    panelClassName: "bg-gradient-to-r from-[#6476a8] to-[#cbc5e6]",
  },
] as const;

export const PROJECTS_PAGE_CALLBACK = {
  eyebrow: "Contact Us",
  heading: "Have Any Question?\nContact Us Immediately",
  description:
    "Let's bring your next project to life - safely, efficiently, and with uncompromising quality.",
  cardTitle: "REQUEST A FREE CALL BACK",
  cardSubtitle: "Fill the form",
  fields: {
    name: "Name*",
    email: "Email Address*",
    phone: "Phone*",
    description: "Description",
  },
  button: "SUBMIT MESSAGE",
} as const;
