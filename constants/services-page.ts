export const SERVICES_PAGE_HERO = {
  title: "Our Services",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ],
  backgroundImage: "/Service Image 4.png",
} as const;

export const SERVICES_PAGE_EXPERIENCE = {
  eyebrow: "WE HAVE OVER 10 YEARS EXPERIENCE",
  heading:
    "Experience the difference of working with a partner built on integrity and precision.",
  description:
    "At Folifod Integrated Services Limited, we combine decades of experience, technical expertise, and unwavering commitment to quality to deliver solutions that exceed expectations.",
  cta: {
    label: "GET STARTED",
    href: "/contact-us",
  },
  image: {
    src: "/vision-img.png",
    alt: "Engineer working in a power plant environment",
  },
} as const;

export const SERVICES_PAGE_TRUST = {
  eyebrow: "WHAT SETS US APART",
  heading: "Your Trusted Ally for Engineering Excellence",
  description:
    "Our clients choose us because we go beyond execution - we build trust, ensure safety, and deliver measurable value on every project.",
  pillars: [
    {
      title: "Proven Expertise",
      text: "10+ years of experience across complex engineering projects.",
    },
    {
      title: "Hands-On Professionals",
      text: "Skilled experts with real-world project experience.",
    },
    {
      title: "Quality-Driven",
      text: "We maintain strict QA/QC standards in every project.",
    },
    {
      title: "Client-Focused",
      text: "Your goals guide our approach; your satisfaction drives our success.",
    },
    {
      title: "Global Standards, Local Insight",
      text: "We combine international best practices with deep local understanding.",
    },
  ],
} as const;
