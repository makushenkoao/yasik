import {Todo} from '@entities/Todo';

export const TODOS_MOCK: Todo[] = [
  {
    date: '2024-02-14T12:40:00.000Z',
    description: 'Task Description',
    priority: 'low_priority',
    title: 'Task Title',
    isCompleted: false,
    id: '1',
  },
  {
    date: '2024-02-14T12:40:00.000Z',
    description: 'Task Description',
    priority: 'no_priority',
    title: 'Task Title',
    isCompleted: false,
    id: '2',
  },
  {
    date: '2024-02-14T12:40:00.000Z',
    description: 'Task Description',
    priority: 'priority',
    title: 'Task Title',
    isCompleted: true,
    id: '3',
  },
  {
    date: '2024-02-14T12:40:00.000Z',
    description: 'Task Description',
    priority: 'important',
    title: 'Task Title',
    isCompleted: false,
    id: '4',
  },
];
