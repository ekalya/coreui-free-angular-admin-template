import { Authority } from '../models/authority';

export class Resource {
  createAuthority: Authority;
  readAuthority: Authority;
  updateAuthority: Authority;
  deleteAuthority: Authority;
  resourceURL: string;
  id: number;
  name: string;
  route: string;
}
