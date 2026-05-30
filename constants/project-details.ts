export type ProjectDetailFieldSection = {
  type: "field";
  label: string;
  value: string;
  /** When true, label and value render on separate lines (e.g. Project Brief). */
  stacked?: boolean;
};

export type ProjectDetailListSection = {
  type: "list";
  label: string;
  /** Optional paragraph shown between the label and bullet list. */
  intro?: string;
  items: string[];
};

export type ProjectDetailSection = ProjectDetailFieldSection | ProjectDetailListSection;

export type ProjectDetail = {
  slug: string;
  title: string;
  date: string;
  client: string;
  location: string;
  sections: ProjectDetailSection[];
  heroImage: string;
  introImage: string;
  galleryImages: string[];
};

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "storage-tank-inspection",
    title: "Storage Tank Inspection",
    date: "Date: February 2024",
    client: "Client: Smithpack/Gladex Dynamic resources - Heritage Oil",
    location: "Location: Heritage Tank Farm Site, Ughelli, Delta State.",
    sections: [
      {
        type: "field",
        label: "Project Brief",
        value: "Tank 111 Out Service API 653 Inspection",
        stacked: true,
      },
      { type: "field", label: "Tank Type", value: "Floating Roof" },
      { type: "field", label: "Service", value: "Crude" },
    ],
    heroImage: "/project-details-hero.jpg",
    introImage: "/project-1-main.png",
    galleryImages: [
      "/project-1-grid-1.jpg",
      "/project-1-grid-4.jpg",
      "/project-1-grid-3.jpg",
      "/project-1-grid-2.jpg",
      "/project-1-grid-5.jpg",
      "/project-1-grid-6.jpg",
      "/project-1-grid-7.jpg",
    ],
  },
  {
    slug: "flowline-leak-repair",
    title:
      "Emergency Flowline Leak Repair and Replacement of 6'' x 2500# Isolation Ball Valve for Utor – Well 32T",
    date: "Date: July 2025",
    client: "Client: NEPL/NDWestern JV",
    location: "Location: OML-34, Utorogun Gas Plant",
    sections: [
      {
        type: "list",
        label: "Project Brief",
        items: [
          "Valve Type: 6'' x 2500# Isolation Ball Valve",
          "Inspection",
          "Repair",
          "Procurement of new valve",
          "Installation",
        ],
      },
    ],
    heroImage: "/project-details-hero.jpg",
    introImage: "/project-2-main.png",
    galleryImages: [
      "/project-2-grid-1.jpg",
      "/project-2-grid-2.jpg",
      "/project-2-grid-3.jpg",
      "/project-2-grid-4.jpg",
      "/project-2-grid-5.jpg",
      "/project-2-grid-6.jpg",
      "/project-2-grid-7.jpg",
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
    sections: [
      {
        type: "list",
        label: "Project Brief",
        items: [
          "Welding",
          "Instrumentation",
          "Hydrotseting",
          "Pipeline Installation",
          "Non-Destructive Testing (NDT)",
          "Cathodic Protection",
        ],
      },
    ],
    heroImage: "/project-details-hero.jpg",
    introImage: "/project-3-main.png",
    galleryImages: [
      "/project-3-grid-1.jpg",
      "/project-3-grid-2.jpg",
      "/project-3-grid-3.jpg",
      "/project-3-grid-4.jpg",
    ],
  },
  {
    slug: "leak-test",
    title: "Leak Test",
    date: "Date: May 2025",
    client: "Client: NEPL/Elcrest/Navante",
    location: "Location: OML-40, Opuama Flow Station, Opuama, Delta State",
    sections: [
      {
        type: "list",
        label: "Project Brief",
        intro: "Pre-commissioning of New Metering Skid",
        items: ["Hydrotesting", "Flange Management"],
      },
    ],
    heroImage: "/project-details-hero.jpg",
    introImage: "/project-4-main.png",
    galleryImages: [
      "/project-4-grid-1.jpg",
      "/project-4-grid-2.jpg",
      "/project-4-grid-3.jpg",
      "/project-4-grid-4.jpg",
    ],
  },
  {
    slug: "power-plant-installation",
    title: "Sapele Power Plant Installation, Ogorode-Sapele.",
    date: "Date: May 2025",
    client:
      "Company: SAPELE POWER PLANT, OTOROGUN, DELTA STATE\nClient: Gladex Dynamic Resources Limited",
    location: "Location: Sapele, Delta State",
    sections: [
      {
        type: "field",
        label: "Project Brief",
        value:
          "API 510 Inspections, Piping Inspection, Hydrotesting, Vessel Cleaning, Valve Servicing, Curve Coating, Valve Testing, PSV Calibration, Installation, Commissioning and Manpower Support",
        stacked: true,
      },
    ],
    heroImage: "/project-details-hero.jpg",
    introImage: "/project-5-main.png",
    galleryImages: [
      "/project-5-grid-1.jpg",
      "/project-5-grid-2.jpg",
      "/project-5-grid-3.jpg",
      "/project-5-grid-4.jpg",
    ],
  },
  {
    slug: "topside-umbilical-termination",
    title: "Fabrication of 2 Topside Umbilical Termination Assembly (TUTA)",
    date: "Date: July 2025",
    client: "Client: West African Exploration and Production Company (WAEP)",
    location: "Location: OML-71, Kalaekule Field, Offshore, River State",
    sections: [],
    heroImage: "/project-details-hero.jpg",
    introImage: "/project-6-main.png",
    galleryImages: [
      "/project-6-grid-1.jpg",
      "/project-6-grid-2.jpg",
      "/project-6-grid-3.jpg",
      "/project-6-grid-4.jpg",
    ],
  },
];

export function getProjectDetailBySlug(slug: string) {
  return PROJECT_DETAILS.find((project) => project.slug === slug);
}
