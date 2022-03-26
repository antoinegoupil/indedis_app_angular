import { Product } from './product.model';

export interface Mark {
  id: number;
  name: string;
  products: Product;
}
