import { Command } from './command.model';
import { User } from './user.model';

export interface Address {
  id: number;
  postalCode: string;
  city: string;
  address: string;
  complement: string;
  user: User;
  commands: Command[];
}
