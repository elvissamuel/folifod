export const CONTACT_US_HERO = {
  title: "Contact Us",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  backgroundImage: "/contact-bg-img.jpg",
} as const;

export const CONTACT_US_CARDS = [
  {
    id: "address",
    title: "Head office address:",
    lines: [
      "No 7 Chief Ukieku Close,",
      "Efrurun/Sapele Road, Effurun,",
      "Delta State",
    ],
  },
  {
    id: "help",
    title: "Call for help:",
    lines: ["(+234) 8077171744", "(+234) 7039509547"],
  },
  {
    id: "mail",
    title: "Mail for information:",
    lines: ["info@folifod.com"],
  },
] as const;

export const CONTACT_US_FORM = {
  eyebrow: "Let's work together",
  title: "Send a Message",
  description:
    "Experience the difference of working with a partner built on integrity and precision.",
  fields: {
    firstName: "First name*",
    email: "Your mail address*",
    phone: "Your Phone Number",
    message: "Message",
  },
  placeholders: {
    firstName: "Type your first name",
    email: "Type your e-mail",
    phone: "Type your phone",
    message: "Start typing here",
  },
  submitLabel: "SUBMIT NOW",
  submittingLabel: "SENDING...",
  successMessage: "Thank you! Your message has been sent. We will get back to you soon.",
  errorMessage: "Something went wrong. Please try again or email us at info@folifod.com.",
  configErrorMessage:
    "The contact form is not configured yet. Please email us at info@folifod.com.",
  subject: "New contact form message - Folifod website",
} as const;

export const CONTACT_US_MAP = {
  title: "Office location map",
  embedUrl:
    "https://www.google.com/maps?q=Effurun,+Delta+State,+Nigeria&z=12&output=embed",
} as const;
