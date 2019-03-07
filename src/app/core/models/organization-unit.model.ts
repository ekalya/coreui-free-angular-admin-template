import { TreeNode } from '@angular/router/src/utils/tree';
import { Tree } from 'primeng/primeng';
import { Location } from './location.model';

export class OrganizationUnit {
    id: number;
    name: string;
    parent: OrganizationUnit;
    children: Array<OrganizationUnit>;
    label: string;
    location: Location
}
