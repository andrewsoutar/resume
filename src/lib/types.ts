export interface Personal {
  name: string;
  address: string[];
  website: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface BaseEntry {
  type: string;
  hidden?: boolean;
  slug: string;
  url?: string;
}

export interface ExperienceEntry extends BaseEntry {
  type: "experience";
  organization: string;
  title: string;
  date: string;
  points: string[];
}

export interface CompetitionEntry extends BaseEntry {
  type: "competition";
  organization?: string;
  title: string;
  date: string;
  points: string[];
}

export interface EducationEntry extends BaseEntry {
  type: "education";
  school: string;
  degree: string;
  date: string;
  courses?: string[];
}

export interface ProjectEntry extends BaseEntry {
  type: "project";
  title: string;
  subtitle?: string;
  points: string[];
}

export interface SkillEntry {
  type: "skill";
  hidden?: boolean;
  title: string;
}

export type Entry =
  | ExperienceEntry
  | CompetitionEntry
  | EducationEntry
  | ProjectEntry
  | SkillEntry;

export interface Resume {
  personal: Personal;
  entries: Entry[];
}
