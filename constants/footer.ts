export const FOOTER = {
  description:
    "We are a professional organization delivering specialized Engineering, Procurement, Construction, Installation, and Commissioning (EPCIC) solutions, alongside expert services in Fabrication, Asset Integrity Management, Quality Management, Engineering Management, and Technical Training across the energy, industrial, and infrastructure sectors.",
  officialInfoHeading: "Official info.",
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
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com",
      variant: "linkedin" as const,
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com",
      variant: "facebook" as const,
    },
    // {
    //   id: "youtube",
    //   label: "YouTube",
    //   href: "https://youtube.com",
    //   variant: "youtube" as const,
    // },
    // {
    //   id: "twitter",
    //   label: "Twitter",
    //   href: "https://twitter.com",
    //   variant: "twitter" as const,
    // },
  ],
} as const;
