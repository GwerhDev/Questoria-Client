export interface Adventure {
  _id: string;
  name: string;
  description: string;
  quests: Quest[];
}

export interface Quest {
  _id: string;
  title: string;
  description: string;
}

