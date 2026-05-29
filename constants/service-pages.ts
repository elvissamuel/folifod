export type ServicePageDetail = {
  slug: string;
  heroTitle: string;
  breadcrumbLabel: string;
  heroImage: string;
  intro: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  focus: {
    eyebrow: string;
    heading: string;
    cards: {
      title: string;
      className: string;
    }[];
  };
  inspectionContent?: {
    qa: {
      eyebrow: string;
      heading: string;
      description: string;
      highlights: string[];
    };
    assurance: {
      eyebrow: string;
      heading: string;
      description: string;
      image: string;
      imageAlt: string;
    };
  };
  trainingContent?: {
    philosophy: {
      eyebrow: string;
      heading: string;
      description: string;
      cards: {
        title: string;
        className: string;
      }[];
    };
    flagship: {
      eyebrow: string;
      heading: string;
      description: string;
      points: string[];
      ctaLabel: string;
      ctaHref: string;
      image: string;
      imageAlt: string;
      galleryImages: string[];
    };
    offerings: {
      heading: string;
      items: string[];
    };
    commitment: {
      eyebrow: string;
      heading: string;
      description: string;
      image: string;
      imageAlt: string;
    };
  };
};

export const SERVICE_PAGE_DETAILS: ServicePageDetail[] = [
  {
    slug: "epc",
    heroTitle: "FOLIFOD EPC",
    breadcrumbLabel: "Our Services",
    heroImage: "/Service Image 1.png",
    intro: {
      eyebrow: "Our Services",
      heading: "FOLIFOD EPC",
      description:
        "Our approach to Engineering, Procurement and Construction with experienced professionals is our trademark of excellence. We provide that necessary technical platform through the establishment of a robust partnership to achieve committed results, preserve legal interests, and maximize commercial and moral client's satisfaction.",
      image: "/hero-bg-right.jpg",
      imageAlt: "Engineer performing EPC-related field inspection",
    },
    focus: {
      eyebrow: "FOCUSCORE",
      heading: "Let's Start Work Together",
      cards: [
        {
          title: "Field Mechanical Installation & Construction",
          className: "bg-[#d95d74]/85",
        },
        {
          title: "Field Engineering Solutions",
          className: "bg-[#1a4a84]/85",
        },
        {
          title: "Instrumentation & Electrical",
          className: "bg-[#123f75]/90",
        },
        {
          title: "Oil & Gas Procurement",
          className: "bg-[#e76456]/90",
        },
      ],
    },
  },
  {
    slug: "maintenance",
    heroTitle: "FOLIFOD MAINTENANCE",
    breadcrumbLabel: "Our Services",
    heroImage: "/Service Image 2.png",
    intro: {
      eyebrow: "Our Services",
      heading: "Precision. Reliability. Performance.",
      description:
        "At Folifod, maintenance is more than routine - it's a discipline built on planning, precision, and performance. With proven expertise in turnaround and shutdown management, we deliver sustainable maintenance solutions that enhance equipment reliability, extend asset life, and ensure continuous operations.",
      image: "/hero-bg-right.jpg",
      imageAlt: "Engineer performing equipment maintenance",
    },
    focus: {
      eyebrow: "Folifod Maintenance",
      heading: "Our Approach",
      cards: [
        {
          title:
            "Our process begins with the development of comprehensive Engineering Work Packages (EWP), tailored to client requirements, regulatory standards, and operational goals. Each package is then executed under a strict maintenance management framework - from risk assessment and execution methodology - ensuring consistency, quality, and efficiency at every stage.",
          className: "bg-[#e76456]/90",
        },
        {
          title:
            "We understand the cost of downtime. That's why our maintenance schedules are strategically aligned with planned operational shutdowns, minimizing disruption and maximizing uptime. Every project is executed with the right tools, trained personnel, and technical supervision, ensuring on-time delivery and operational excellence.",
          className: "bg-[#1a4a84]/90",
        },
      ],
    },
  },
  {
    slug: "inspection",
    heroTitle: "FOLIFOD INSPECTION",
    breadcrumbLabel: "Our Services",
    heroImage: "/Service Image 3.png",
    intro: {
      eyebrow: "Our Services",
      heading: "Integrity. Compliance. Confidence.",
      description:
        "Inspection and quality assurance form the backbone of Folifod's operational excellence. We stay guided by an effective responsibility, ensuring every project we deliver meets or exceeds the highest global standards for safety, reliability, and performance.",
      image: "/hero-bg-right.jpg",
      imageAlt: "Industrial inspection in progress",
    },
    focus: {
      eyebrow: "FOCUS AREA",
      heading: "Let's Start Work Together",
      cards: [
        { title: "API Inspection Programs", className: "bg-[#d95d74]/85" },
        { title: "Integrity Verification", className: "bg-[#1a4a84]/85" },
        { title: "NDT Coordination", className: "bg-[#123f75]/90" },
        { title: "Regulatory Compliance Review", className: "bg-[#e76456]/90" },
      ],
    },
    inspectionContent: {
      qa: {
        eyebrow: "Our Services",
        heading: "Comprehensive QA/QC Solutions",
        description:
          "Our Quality Assurance and Quality Control (QA/QC) framework spans all project phases - from material verification and fabrication to installation, commissioning, and in-service operations. By identifying potential issues early and enforcing strict quality control, we help clients reduce risk, extend asset life, and maintain compliance. Every inspection is conducted using industry-recognized standards and codes, supported by modern inspection technologies and digital reporting tools for transparent, data-driven outcomes.",
        highlights: [
          "In-service and turnaround inspections",
          "Risk-based assessments and audits",
          "Mechanical integrity evaluations",
        ],
      },
      assurance: {
        eyebrow: "FOLIFOD MAINTENANCE",
        heading: "Assurance Through Expertise",
        description:
          "At Folifod Integrated Services Limited, we invest in people, process, and precision. Our inspectors carry vital certifications - they are trusted partners who bring integrity and accountability to every project.\n\nFrom routine QA/QC checks to complex asset integrity audits, Folifod delivers inspection services that ensure your facilities remain safe, compliant, and reliable.",
        image: "/Service Image 4.png",
        imageAlt: "Inspection team operating equipment in the field",
      },
    },
  },
  {
    slug: "training",
    heroTitle: "FOLIFOD TRAINING",
    breadcrumbLabel: "Our Services",
    heroImage: "/Service Image 4.png",
    intro: {
      eyebrow: "Our Services",
      heading: "Building Competence. Elevating Standards. Sustaining Excellence.",
      description:
        "At Folifod, we believe that long-term success in engineering begins with people. Training is at the core of our solutions - designed to enhance competence at every level - from entry-level technical staff to seasoned professionals.\n\nOur programs are built on industry-centric experience, real-life scenarios and improvement, ensuring that every participant - from safety and technical experts to operations and supervisors - gains practical, relevant and globally aligned expertise.",
      image: "/Service Image 4.png",
      imageAlt: "Technical field training session",
    },
    focus: {
      eyebrow: "FOCUS AREA",
      heading: "Let's Start Work Together",
      cards: [
        { title: "Technical Competency Development", className: "bg-[#d95d74]/85" },
        { title: "Field Safety Training", className: "bg-[#1a4a84]/85" },
        { title: "QA/QC Process Training", className: "bg-[#123f75]/90" },
        { title: "Operational Readiness Programs", className: "bg-[#e76456]/90" },
      ],
    },
    trainingContent: {
      philosophy: {
        eyebrow: "Our Philosophy",
        heading: "FOLIFOD TRAINING",
        description:
          "We don't just train; we build capability. Every course we offer is shaped by real industry challenges, delivered by experienced instructors, and supported with hands-on working sessions directly in the field.",
        cards: [
          { title: "Refresher courses for experienced personnel", className: "bg-[#d95d74]/90" },
          { title: "Capacity-building programs for new entrants", className: "bg-[#1a4a84]/90" },
          { title: "Custom corporate training tailored to client operations", className: "bg-[#123f75]/90" },
          { title: "Flagship Program: Zero Leakage Mechanical Fitting", className: "bg-[#e76456]/90" },
        ],
      },
      flagship: {
        eyebrow: "FLAGSHIP PROGRAM",
        heading: "Zero Leakage Mechanical Fitting",
        description:
          "Our signature program, the Zero Leakage Mechanical Fitting Course, is designed for technicians and pipeline personnel aiming to eliminate common mechanical leakage errors.",
        points: [
          "Based on practical lessons from three decades' experience in pipeline installation and maintenance.",
          "Enhances cross-discipline field confidence and precision.",
          "Reduces downtime and safety incidents.",
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "/contact-us",
        image: "/choose-us-img.png",
        imageAlt: "Training certificate presentation session",
        galleryImages: [
          "/choose-us-img.png",
          "/Service Image 4.png",
          "/vision-img.png",
          "/hero-bg-right.jpg",
          "/Service Image 1.png",
          "/Service Image 2.png",
          "/Service Image 3.png",
        ],
      },
      offerings: {
        heading: "Training and Capacity Development Offerings",
        items: [
          "Operational Integrity Services",
          "Inspection Services and QA/QC",
          "Mechanical Integrity Training (Heat Exchangers, Fin-fan Coolers, Piping Integrity)",
          "API Certification Training: API 570 / 510 / 653 / 580",
          "Pre-Commissioning & Third-Party Audit Procedures",
          "Local Content Training & Manpower Development",
          "Hinge Management & Organization Efficiency Training",
          "Completions and Inspection Training",
          "Mechanical Fitting",
        ],
      },
      commitment: {
        eyebrow: "FOLIFOD MAINTENANCE",
        heading: "Our Commitment",
        description:
          "At Folifod Integrated Services Limited, our goal is to create a workforce that performs safely, efficiently, and sustainably. We believe programs that blend instructional discipline, mentoring support and practical immersion based exercises, are what build competence.\n\nWhether you're upskilling your workforce, building fresh recruits, or preparing your team for field-based operational excellence.",
        image: "/vision-img.png",
        imageAlt: "Hands-on classroom training session",
      },
    },
  },
];

export function getServicePageDetailBySlug(slug: string) {
  return SERVICE_PAGE_DETAILS.find((item) => item.slug === slug);
}
