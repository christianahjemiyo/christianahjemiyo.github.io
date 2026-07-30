import type { LinkItem, NavigationItem } from "./types";

export const site = {
  title: "Christianah O. Jemiyo",
  url: "https://christianahjemiyo.github.io",
  description:
    "Academic and technical portfolio for Christianah O. Jemiyo, an Artificial Intelligence PhD student, statistician, health data researcher, and machine learning practitioner.",
  ogImage: "/og.svg"
};

export const profile = {
  displayName: "Christianah O. Jemiyo",
  headline: "Artificial Intelligence PhD Student | Statistician | Health Data Researcher",
  shortIntro:
    "I apply statistical modelling and machine learning methods to health-data research, with interests spanning biostatistics, epidemiology, public health, health disparities, and reproducible analysis.",
  biography:
    "I am a PhD student in Artificial Intelligence with more than 10 years of experience across statistics, biostatistics, and epidemiology. My work applies statistical and machine learning methods to large health datasets, including the Behavioral Risk Factor Surveillance System and electronic health record data from the All of Us Research Program.",
  invitation:
    "For research, academic, or professional enquiries, please connect with me through one of the verified professional platforms below.",
  resumeNote: "Public résumé available upon request.",
  googleScholarNote:
    "For the most current publication list and citation information, visit my Google Scholar profile."
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Research", href: "/research/" },
  { label: "Projects", href: "/projects/" },
  { label: "Publications", href: "/publications/" },
  { label: "Experience", href: "/experience/" },
  { label: "Education", href: "/education/" },
  { label: "Service", href: "/service/" },
  { label: "Skills", href: "/skills/" },
  { label: "Résumé", href: "/resume/" },
  { label: "Contact", href: "/contact/" }
];

export const publicLinks: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/christianahjemiyo",
    type: "github",
    includeInContact: true
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=UhJLPxUAAAAJ&hl=en",
    type: "scholar",
    includeInContact: true
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-3113-3928",
    type: "orcid",
    includeInContact: true
  }
];

export const researchInterests = [
  "Statistics",
  "Biostatistics",
  "Epidemiology",
  "Public Health",
  "Machine Learning",
  "Health disparities",
  "Chronic disease research",
  "Infectious disease modelling",
  "Large health datasets",
  "Reproducible research",
  "Ethical data handling"
];
