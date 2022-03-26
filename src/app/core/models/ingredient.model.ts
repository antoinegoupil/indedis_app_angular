import { Product } from './product.model';

export interface Ingredient {
  id: number;
  name: string;
  products: Product[];
}
