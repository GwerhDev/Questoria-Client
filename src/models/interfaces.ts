export interface Adventure {
  id: number;
  name: string;
  unities: Quest[];
}

export interface Quest {
  id: number;
  name: string;
  description: string;
}

