import { Authority } from '../models/authority';
import {} from '../models/resource';



export class Role {
    id: number;
    name: string;
    authorities: Array<Authority>;
    resources: Array<Resource>;
}
