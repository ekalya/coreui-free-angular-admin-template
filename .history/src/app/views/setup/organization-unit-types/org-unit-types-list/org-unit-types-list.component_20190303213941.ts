import { Component, OnInit, ViewChild } from '@angular/core';
import {TreeNode, MessageService, MenuItem} from 'primeng/api';
import { OrganizationUnitTypesService } from '../../../../core/services';

@Component({
selector: 'app-org-unit-types-list',
templateUrl: './org-unit-types-list.component.html',
styleUrls: ['./org-unit-types-list.component.scss'],
providers: [MessageService]
})
export class OrgUnitTypesListComponent implements OnInit {

selectedUnit: TreeNode;
orgHierachy: TreeNode[];
items: MenuItem[];

constructor(
    private organizationUnitTypesService: OrganizationUnitTypesService,
    private messageService: MessageService) { }

ngOnInit() {
    this.organizationUnitTypesService.getAll().subscribe(data => {
        this.orgHierachy = data;
    });
    this.items = [
        {label: 'View', icon: 'fa fa-search', command: (event) => this.viewFile(this.selectedUnit)},
        {label: 'Unselect', icon: 'fa fa-close', command: (event) => this.unselectFile()}
    ];
}

nodeSelect(event) {
    this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
}

nodeUnselect(event) {
    this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
}

nodeExpandMessage(event) {
    this.messageService.add({severity: 'info', summary: 'Node Expanded', detail: event.node.label});
}


private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    }
}
unselectFile() {
    this.selectedUnit = null;
}
}
