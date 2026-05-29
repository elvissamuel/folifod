export const TRUSTED_PARTNERS_SECTION = {
  title: "Trusted by Industry Leaders",
  subtitle: "Brands we have worked with",
  backgroundImage: "/hero-bg-right.jpg",
} as const;

export type PartnerLogo = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  whiteBox?: boolean;
};

export const PARTNER_LOGOS_ROW_ONE: PartnerLogo[] = [
  {
    id: "nnpc",
    name: "NNPC",
    src: "/nnpc-logo.png",
    width: 140,
    height: 48,
  },
  {
    id: "shell",
    name: "Shell",
    src: "/shell-logo.png",
    width: 120,
    height: 56,
  },
  {
    id: "chevron",
    name: "Chevron",
    src: "/chevron-logo.png",
    width: 130,
    height: 52,
  },
  {
    id: "elcrest",
    name: "Elcrest Exploration & Production Nigeria Ltd",
    src: "/elcrest-logo.png",
    width: 200,
    height: 64,
    whiteBox: true,
  },
];

export const PARTNER_LOGOS_ROW_TWO: PartnerLogo[] = [
  {
    id: "nd-western",
    name: "ND Western",
    src: "/nd-western-logo.png",
    width: 150,
    height: 52,
  },
  {
    id: "seplat",
    name: "Seplat Energy",
    src: "/seplat-logo.png",
    width: 140,
    height: 56,
    whiteBox: true,
  },
  {
    id: "waep",
    name: "WAEP",
    src: "/waep-logo.png",
    width: 110,
    height: 48,
  },
];
