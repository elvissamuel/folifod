export const SERVICE_DETAILS = [
  {
    slug: "epc",
    title: "EPC",
    heading: "Engineering, Procurement and Construction (EPC)",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    heading: "Industrial Maintenance Services",
  },
  {
    slug: "inspection",
    title: "Inspection",
    heading: "Inspection and Integrity Services",
  },
  {
    slug: "training",
    title: "Training",
    heading: "Technical Training Services",
  },
] as const;

export function getServiceBySlug(slug: string) {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}
