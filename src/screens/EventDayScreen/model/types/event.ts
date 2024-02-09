export interface Activity {
  activity: string;
  accessibility: number;
  type: ActivityType;
  participants: number;
  price: number;
  link: string;
  key: string;
}

export type ActivityType =
  | 'education'
  | 'recreational'
  | 'social'
  | 'diy'
  | 'charity'
  | 'cooking'
  | 'relaxation'
  | 'music'
  | 'busywork';
