import { TreeNode } from '@angular/router/src/utils/tree';
import { Tree } from 'primeng/primeng';

export class OrganizationUnit extends TreeNode<OrganizationUnit> {
    id: number;
    name: string;
    parent: OrganizationUnit;
    children: Array<OrganizationUnit>;
    label: string;
}
