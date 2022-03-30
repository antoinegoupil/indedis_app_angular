import { Product } from 'src/app/core/models/product.model';

export interface ProductBasketDto {
  readonly product: Product;
  readonly amount: number;
}
