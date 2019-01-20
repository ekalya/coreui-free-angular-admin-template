import { Authority } from '../models/authority';



export class Role {
    id: number;
    name: string;
    authorities: Array<Authority>;
    resources: Array<Resource>;
}
