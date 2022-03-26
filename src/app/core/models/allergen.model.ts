import { Product } from './product.model';

export interface Allergen {
  id: number;
  name: string;
  products: Product[];
}
