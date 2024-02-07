export type Priority =
  | 'low_priority'
  | 'no_priority'
  | 'priority'
  | 'important';

export interface Todo {
  date: string;
  description: string;
  priority: Priority;
  title: string;
  isCompleted: boolean;
  id: string;
}
