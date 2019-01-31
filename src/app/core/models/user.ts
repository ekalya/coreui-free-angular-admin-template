import { Authority } from '../models/authority';
import { Role } from '../models/role';

export class User {
  authorities: Array<Authority>;
  username: string;
  roles: Array<any>;
  enabled: boolean;
  id: number;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  authenticated: boolean;
  password: string;
}
