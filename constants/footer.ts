export const FOOTER = {
  description:
    "We are a professional company offering specialized services in Fabrication, Asset Integrity, Quality Management, Engineering Management, and Training,",
  officialInfoHeading: "Offical info.",
  address: {
    lines: [
      "No 7 Chief Ukueku Close,",
      "Effurun/Sapele Road, Effurun,",
      "Delta State",
    ],
  },
  phones: ["(+234) 8077171744", "(+234) 7039509547"] as const,
  email: "info@folifod.com",
  social: [
    {
      id: "placeholder",
      label: "Social link",
      href: "#",
      variant: "white" as const,
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com",
      variant: "facebook" as const,
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "https://youtube.com",
      variant: "youtube" as const,
    },
    {
      id: "twitter",
      label: "Twitter",
      href: "https://twitter.com",
      variant: "twitter" as const,
    },
  ],
} as const;
