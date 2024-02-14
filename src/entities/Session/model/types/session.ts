export interface Session {
  _id: string
  __v: number
  creator: string;
  genres: string[];
  code: string;
  participants: string[];
  matches: string[];
  createdAt: Date;
  updatedAt: Date;
}
