import { Address } from './address.model';
import { Command } from './command.model';
import { UserStatus } from './user-status.model';
import { UserType } from './user-type.model';

export interface User {
  id: number;
  name: string;
  firstname: string;
  email: string;
  userStatus: UserStatus;
  userType: UserType;
  commands: Command[];
  addresses: Address[];
}
