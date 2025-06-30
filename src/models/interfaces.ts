export interface Adventure {
  _id: string;
  name: string;
  description: string;
  quests?: Quest[];
}

export interface Quest {
  _id: string;
  title: string;
  description: string;
  adventureId: string;
}

export interface User {
  id: string;
  profilePic: string;
  username: string;
  role: string;
}

