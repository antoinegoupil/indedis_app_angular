import { Command } from './command.model';
import { Product } from './product.model';

export interface CommandProduct {
  product: Product;
  command: Command;
  amount: number;
}
