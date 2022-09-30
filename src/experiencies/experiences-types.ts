type ExperienceType = "work" | "diploma" | "birth";

type ExperiencePlace = {
  city: string;
  country: string;
};

export type Experience = {
  type: ExperienceType;
  place: ExperiencePlace;
  title: string;
  content: string;
  startedAt: string;
  endedAt?: string;
};
