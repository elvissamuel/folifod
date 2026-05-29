export type ProjectDetail = {
  slug: string;
  title: string;
  date: string;
  client: string;
  location: string;
  projectRef: string;
  service: string;
  heroImage: string;
  introImage: string;
  galleryImages: string[];
};

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "storage-tank-inspection",
    title: "Storage Tank Inspection",
    date: "Date: February 2024",
    client: "Client: smithpack dynamic resources - Heritage Oil",
    location: "Location: Heritage tank farm site, ughelli, delta state.",
    projectRef: "Project title:",
    service: "Tank floor internal API 653 inspection",
    heroImage: "/hero-bg-right.jpg",
    introImage: "/hero-bg-right.jpg",
    galleryImages: [
      "/hero-bg-right.jpg",
      "/Service Image 1.png",
      "/Service Image 2.png",
      "/Service Image 4.png",
      "/choose-us-img.png",
      "/vision-img.png",
      "/Service Image 3.png",
    ],
  },
  {
    slug: "flowline-leak-repair",
    title:
      "Emergency Flowline Leak Repair and Replacement of 6'' x 2500# Isolation Ball Valve for Utor Well 32T",
    date: "Date: July 2025",
    client: "Client: NNPC/NEPL",
    location: "Location: Oben-45, Umugini Gas Plant",
    projectRef: "Project title:",
    service:
      "Replacement of new valve, revalidation and integrity verification of 6'' x 2500# isolation ball valve.",
    heroImage: "/Service Image 1.png",
    introImage: "/Service Image 1.png",
    galleryImages: [
      "/Service Image 1.png",
      "/Service Image 1.png",
      "/Service Image 2.png",
      "/Service Image 2.png",
      "/Service Image 1.png",
      "/Service Image 4.png",
      "/Service Image 1.png",
    ],
  },
  {
    slug: "epc",
    title:
      "Engineering, Procurement and Construction (EPC) Works of Early Gas Supply to Mathsmetal Recycling Limited",
    date: "Date: December 2022",
    client:
      "Company: MATHSMETAL RECYCLING COMPANY LIMITED\nClient: Xylem Integrated International Limited",
    location: "Location: Sagamu, Ogun State",
    projectRef: "Project title:",
    service:
      "• Welding\n• Instrumentation\n• Hydrotseting\n• Pipeline Installation\n• Non-Destructive Testing (NDT)\n• Cathodic Protection",
    heroImage: "/Service Image 2.png",
    introImage: "/Service Image 2.png",
    galleryImages: [
      "/Service Image 2.png",
      "/Service Image 3.png",
      "/Service Image 2.png",
      "/Service Image 1.png",
      "/choose-us-img.png",
      "/Service Image 3.png",
      "/Service Image 2.png",
    ],
  },
  {
    slug: "leak-test",
    title: "Leak Test",
    date: "Date: 2024",
    client: "Client: Folifod Project Unit",
    location: "Location: Nigeria",
    projectRef: "Project title:",
    service: "Leak testing and verification",
    heroImage: "/Service Image 4.png",
    introImage: "/Service Image 4.png",
    galleryImages: [
      "/Service Image 4.png",
      "/Service Image 1.png",
      "/Service Image 2.png",
      "/Service Image 3.png",
      "/hero-bg-right.jpg",
      "/choose-us-img.png",
      "/vision-img.png",
    ],
  },
  {
    slug: "power-plant-installation",
    title: "Sapele Power Plant Installation, Ogorode-Sapele.",
    date: "Date: May 2025",
    client:
      "Company: SAPELE POWER PLANT, OTOROGUN, DELTA STATE\nClient: Gladex Dynamic Resources Limited",
    location: "Location: Sapele, Delta State",
    projectRef: "Project title:",
    service:
      "API 510 Inspections, Piping Inspection, Hydrotesting, Vessel Cleaning, Valve Servicing, Curve Coating, Valve Testing, PSV Calibration, Installation, Commissioning and Manpower Support",
    heroImage: "/vision-img.png",
    introImage: "/vision-img.png",
    galleryImages: [
      "/vision-img.png",
      "/Service Image 4.png",
      "/Service Image 2.png",
      "/Service Image 3.png",
      "/vision-img.png",
    ],
  },
  {
    slug: "topside-umbilical-termination",
    title: "Fabrication of 2 Topside Umbilical Termination Assembly (TUTA)",
    date: "Date: July 2025",
    client:
      "client: Wellcon manpowerfield and production company (Ovuar)\nlocation: OML 70 Utorole field offshore, River State",
    location: "",
    projectRef: "Project title:",
    service: "",
    heroImage: "/choose-us-img.png",
    introImage: "/choose-us-img.png",
    galleryImages: [
      "/choose-us-img.png",
      "/choose-us-img.png",
      "/Service Image 2.png",
      "/Service Image 3.png",
    ],
  },
];

export function getProjectDetailBySlug(slug: string) {
  return PROJECT_DETAILS.find((project) => project.slug === slug);
}
