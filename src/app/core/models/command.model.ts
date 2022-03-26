import { Address } from './address.model';
import { CommandProduct } from './command-product.model';
import { User } from './user.model';

export interface Command {
  id: number;
  date: string;
  time: string;
  price: number;
  commandProducts: CommandProduct[];
  user: User;
  address: Address;
}
