import { Mark } from '../../core/models/mark.model';
import { User } from '../../core/models/user.model';

export interface initDto {
  user: User;
  marks: Mark[];
}
