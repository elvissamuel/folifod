export const ABOUT_US_HERO = {
  title: "About Us",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
  ],
  backgroundImage: "/hero-bg-right.jpg",
} as const;

export const ABOUT_US_INTRO = {
  eyebrow: "ABOUT US",
  heading: "Engineering Integrity. Delivering Excellence.",
  paragraphs: [
    "We are a team of well trained, experienced, and hands-on Integrity Inspection Champions. We pride ourselves in our ability to perform basic, advance, and functional related asset management services. And tie our input to the needs of the organization, ensuring all applicable codes and standard requirements governing industry operations are adhered to.",
    "We are your first line of defense in equipment integrity inspections. Our Asset Integrity program provides quality assurance efficiency in design, construction, installation, maintenance, and in-service operational competence. Our range of services include Static Equipment Integrity, Quality Management, and Inspection Services.",
  ],
  image: {
    src: "/about-image-1.png",
    alt: "Folifod engineers performing equipment inspection",
  },
} as const;

export const ABOUT_US_MISSION_VISION = [
  {
    id: "mission",
    icon: "/target-icon.png",
    title: "OUR MISSION",
    description:
      "To provide fixed equipment integrity and quality management services to meet industry standards and satisfy customer expectations.",
  },
  {
    id: "vision",
    icon: "/eye-target-icon.png",
    title: "OUR VISION",
    description:
      "To be a world class integrity and quality assurance provider while empowering innovation through cutting-edge engineering solutions to shape a sustainable and connected future.",
  },
] as const;

export const ABOUT_US_VALUES = {
  eyebrow: "OUR CORE VALUES",
  heading: "Guided by Principles. Driven by Excellence.",
  description:
    "Our values define who we are and guide every decision, project, and partnership. They are the foundation of our reputation as a trusted engineering and quality assurance company.",
  items: [
    {
      title: "Integrity",
      text: "We uphold honesty, transparency, and accountability in all we do.",
    },
    {
      title: "Safety",
      text: "We prioritize the protection of people, assets, and the environment.",
    },
    {
      title: "Professionalism",
      text: "Our team delivers with competence, discipline, and respect.",
    },
    {
      title: "Innovation",
      text: "We adopt modern methods to solve today's toughest challenges.",
    },
    {
      title: "Excellence",
      text: "We aim for precision and quality in every solution.",
    },
  ],
  image: {
    src: "/about-image-2.png",
    alt: "Folifod team in a technical training room",
  },
} as const;
