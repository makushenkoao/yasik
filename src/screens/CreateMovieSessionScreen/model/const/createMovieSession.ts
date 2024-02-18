import {OrderItem} from '../types/createMovieSession';

export const orderItems: OrderItem[] = [
  {label: 'Rating', value: 'rating'},
  {label: 'Novelty', value: 'novelty'},
  {label: 'Random', value: 'random'},
];

export const orderPlaceholder: OrderItem = {value: 'default', label: 'Default'};
