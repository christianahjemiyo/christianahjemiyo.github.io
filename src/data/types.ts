export type LinkItem = {
  label: string;
  href: string;
  type:
    | "github"
    | "scholar"
    | "orcid"
    | "repository"
    | "publisher"
    | "doi"
    | "pubmed"
    | "pmc"
    | "arxiv"
    | "demo"
    | "source";
  includeInContact?: boolean;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type TimelineEntry = {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  place?: string;
  status?: string;
  completed?: string;
  started?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
  context?: string;
};

export type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  methods: string[];
  technologies: string[];
  repository: string;
  demo?: string;
  evidence: string;
  featured?: boolean;
  privacyNote?: string;
};

export type PublicationAuthor = {
  name: string;
  highlight?: boolean;
};

export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: PublicationAuthor[];
  year: string;
  venue: string;
  category: "journal" | "proceedings" | "preprint" | "presentation" | "thesis";
  typeLabel: string;
  details?: string;
  doi?: string;
  links: PublicationLink[];
  summary?: string;
  note?: string;
  associatedWith?: string;
  featured?: boolean;
  verification: string;
};
