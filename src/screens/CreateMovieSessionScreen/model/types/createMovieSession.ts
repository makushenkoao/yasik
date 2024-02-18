export type Order = 'rating' | 'novelty' | 'default' | 'random';

export interface OrderItem {
  label: string;
  value: string;
}
