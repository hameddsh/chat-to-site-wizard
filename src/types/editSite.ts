
export type SectionWithSubtitle = {
  title: string;
  subtitle: string;
};

export type SectionWithContent = {
  title: string;
  content: string;
};

export type SectionContent = {
  header: SectionWithSubtitle;
  about: SectionWithContent;
  services: SectionWithContent;
  contact: SectionWithContent;
};

export type SectionType = keyof SectionContent;
