import { TreeNode } from '@angular/router/src/utils/tree';

export class OrganizationUnit extends TreeNode {
    id: number;
    name: string;
    parent: OrganizationUnit;
    children: Array<OrganizationUnit>;
    label: string;
}
