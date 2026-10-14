export type Project = {
  id: string;
  number: number;
  title: string;
  category: string;
  status: "Live" | "Private";
  summary: string;
  contribution: string;
  technologies: string[];
  artworkClassName: string;
  links?: {
    label: string;
    href: string;
  }[];
  image: {
    src: string | null;
    alt: string;
    placeholderLabel: string;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
};

export type Experience = {
  id: string;
  label: string;
  role: string;
  organisation: string;
  meta: string;
  responsibilities: string[];
};

export const featuredTech = [
  { name: "JavaScript", mark: "JS" },
  { name: "React", mark: "R" },
  { name: "Next.js", mark: "N" },
  { name: "Tailwind CSS", mark: "TW" },
  { name: "Supabase", mark: "SB" },
  { name: "Git", mark: "G" },
  { name: "Vercel", mark: "V" },
];

export const techGroups = [
  {
    label: "Frontend & UI",
    items: [
      { name: "JavaScript", mark: "JS" },
      { name: "React", mark: "R" },
      { name: "Next.js", mark: "N" },
      { name: "Tailwind CSS", mark: "TW" },
      { name: "HTML", mark: "5" },
      { name: "CSS", mark: "3" },
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { name: "PHP", mark: "PHP" },
      { name: "Python", mark: "PY" },
      { name: "SQL", mark: "SQL" },
      { name: "Supabase", mark: "SB" },
      { name: "PostgreSQL", mark: "PG" },
      { name: "MySQL", mark: "MY" },
      { name: "REST APIs", mark: "API" },
      { name: "Google Sheets API", mark: "GS" },
    ],
  },
  {
    label: "Tools & Workflow",
    items: [
      { name: "Git", mark: "G" },
      { name: "GitHub", mark: "GH" },
      { name: "Vercel", mark: "V" },
      { name: "OpenAI Codex", mark: "AI" },
      { name: "Google Flow", mark: "GF" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "gunita",
    number: 1,
    title: "Gunita Stories — Wedding Website Platform",
    category: "Wedding platform",
    status: "Live",
    summary: "A wedding website business and platform I am developing alongside custom website services. It is focused on customizable wedding websites and invitations, event configuration, guest information, and custom domain routing where implemented.",
    contribution: "Operate the business, coordinate client-facing website work, and develop the platform and relevant website features.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "Vercel"],
    artworkClassName: "artwork-gunita",
    links: [{ label: "Visit Gunita", href: "https://gunitastories.com/" }],
    image: {
      src: "/images/projects/gunitastories.png",
      alt: "Gunita Stories wedding website platform shown across laptop, tablet, and phone screens",
      placeholderLabel: "Replace with authentic screenshot",
    },
  },
  {
    id: "ian-and-ayra",
    number: 2,
    title: "Ian & Ayra",
    category: "Custom wedding website",
    status: "Live",
    summary: "A custom wedding website created for Ian & Ayra and delivered through Gunita.",
    contribution: "Develop the wedding website based on the couple's event details and requested presentation.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    artworkClassName: "artwork-wedding",
    links: [{ label: "Visit website", href: "https://ianandayra.gunitastories.com/" }],
    image: {
      src: "/images/projects/ian&ayra.png",
      alt: "Ian and Ayra custom wedding website shown across device mockups",
      placeholderLabel: "Replace with approved client screenshot",
    },
  },
  {
    id: "precious-and-monica",
    number: 3,
    title: "Precius & Monica",
    category: "Custom wedding website",
    status: "Live",
    summary: "A custom wedding website created for Precius & Monica and delivered through Gunita.",
    contribution: "Develop the wedding website based on the couple's event details and requested presentation.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    artworkClassName: "artwork-wedding",
    links: [{ label: "Visit website", href: "https://preciousandmonica.gunitastories.com/" }],
    image: {
      src: "/images/projects/precius&monica.png",
      alt: "Precius and Monica custom wedding website shown across device mockups",
      placeholderLabel: "Replace with approved client screenshot",
    },
  },
  {
    id: "gian-and-immanuelle",
    number: 4,
    title: "Gian & Immanuelle",
    category: "Custom wedding website",
    status: "Live",
    summary: "A custom wedding website created for Gian & Immanuelle and delivered through Gunita.",
    contribution: "Develop the wedding website based on the couple's event details and requested presentation.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    artworkClassName: "artwork-wedding",
    links: [{ label: "Visit website", href: "https://gianandimmanuelle.gunitastories.com/" }],
    image: {
      src: "/images/projects/gian&immanuelle.png",
      alt: "Gian and Immanuelle custom wedding website shown across device mockups",
      placeholderLabel: "Replace with approved client screenshot",
    },
  },
  {
    id: "adi-and-kate",
    number: 5,
    title: "Adi & Kate",
    category: "Custom wedding website",
    status: "Live",
    summary: "A custom wedding website created for Adi & Kate and delivered through Gunita.",
    contribution: "Develop the wedding website based on the couple's event details and requested presentation.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    artworkClassName: "artwork-wedding",
    links: [{ label: "Visit website", href: "https://adiandkate.gunitastories.com/" }],
    image: {
      src: "/images/projects/adie&kate.png",
      alt: "Adi and Kate custom wedding website shown across device mockups",
      placeholderLabel: "Replace with approved client screenshot",
    },
  },
  {
    id: "allan-and-heidee",
    number: 6,
    title: "Allan & Heidee",
    category: "Custom wedding website",
    status: "Live",
    summary: "A custom wedding website created for Allan & Heidee and delivered through Gunita.",
    contribution: "Develop the wedding website based on the couple's event details and requested presentation.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    artworkClassName: "artwork-wedding",
    links: [{ label: "Visit website", href: "https://allanandheidee.gunitastories.com/" }],
    image: {
      src: "/images/projects/allan&heidee.png",
      alt: "Allan and Heidee custom wedding website shown across device mockups",
      placeholderLabel: "Replace with approved client screenshot",
    },
  },
  {
    id: "point-of-sale",
    number: 7,
    title: "Point-of-Sale Mobile Application",
    category: "Private build",
    status: "Private",
    summary: "A mobile point-of-sale application involving sales transactions and inventory management, using Supabase where applicable.",
    contribution: "Build and shape practical workflows for day-to-day point-of-sale use without overstating production adoption or business outcomes.",
    technologies: ["Supabase", "SQL", "Web application", "Inventory workflows"],
    artworkClassName: "artwork-pos",
    image: {
      src: "/images/projects/dagos-trading.png",
      alt: "Dagos Trading point-of-sale mobile application product image",
      placeholderLabel: "Replace with authentic screenshot",
    },
  },
];

export const experience: Experience[] = [
  {
    id: "gunita-experience",
    label: "Independent business · November 18, 2025 – Present",
    role: "Founder & Web Developer",
    organisation: "Gunita Stories",
    meta: "2025 — Present",
    responsibilities: [
      "Operate Gunita Stories as a wedding website business while managing sales, client communication, and project coordination.",
      "Develop custom wedding websites based on clients' event details, preferences, and functional requirements.",
      "Develop the Gunita Stories platform alongside client-facing projects using relevant web technologies where applicable.",
    ],
  },
  {
    id: "it-instructor",
    label: "Previous role · August 2024 – December 2024",
    role: "IT Instructor",
    organisation: "St. Anne College Lucena",
    meta: "2024",
    responsibilities: [
      "Taught programming and core information technology subjects, emphasizing hands-on training in PHP and MySQL",
      "Guided students through practical software development concepts, database structures, and algorithmic logic.",
      "Mentored students through structured code troubleshooting and debugging techniques to solve technical challenges.",
      "Designed practical lab exercises and project milestones that prepared students for real-world development workflows.",
    ],
  },
];
