import { Component, OnInit } from '@angular/core';
import { MessageService, MenuItem, TreeNode, DialogService } from 'primeng/api';
import { OrganizationUnitService } from '../../../../core/services';
import { OrganizationUnit } from '../../../../core';
import { InputControlBase } from '../../../../core/models';
import { FormGroup } from '@angular/forms';
import {  OrganizationUnitUIService} from '../organization-unit-ui.service';

@Component({
selector: 'app-organization-units',
templateUrl: './organization-units.component.html',
styleUrls: ['./organization-units.component.scss'],
providers: [MessageService, DialogService]
})
export class OrganizationUnitsComponent implements OnInit {
selectedOrgUnit: OrganizationUnit;
orgUnits: TreeNode<OrganizationUnit>[];
items: MenuItem[];

inputForm: Number = 2;
enableInputForm: Boolean = true;
displayForm: Boolean = false;

controls: InputControlBase<any>[] = [];
model: OrganizationUnit;
action: any;
hideSaveButton: Boolean = true;
hideCloseButton: Boolean = true;

constructor(
    public dialogService: DialogService,
    private organizationUnitService: OrganizationUnitService,
    private messageService: MessageService,
    private organizationUnitUIService: OrganizationUnitUIService) {
        this.controls = this.organizationUnitUIService.getMetadata();
    }

ngOnInit() {
    this.organizationUnitService.getAll().subscribe(data => {
    this.orgUnits = data;
});
this.items = [
    {label: 'Add child', icon: 'fa fa-plus-square', command: (event) => this.addChild(this.selectedOrgUnit)},
    {label: 'Details', icon: 'pi pi-search', command: (event) => this.details(this.selectedOrgUnit)},
    {label: 'Edit', icon: 'pi pi-pencil', command: (event) => this.edit(this.selectedOrgUnit)},
    {label: 'Delete child', icon: 'fa fa-remove', command: (event) => this.deleteChild(this.selectedOrgUnit)}
];
}
addChild(node: OrganizationUnit) {
    this.displayForm = true;
    this.hideCloseButton = false;
    this.hideSaveButton = false;
    this.model = new OrganizationUnit<node>();
    this.action = 'CREATE';
}
details(node: OrganizationUnit) {
    this.model = this.selectedOrgUnit as OrganizationUnit;
    this.action = 'READ';
    this.hideCloseButton = false;
    this.hideSaveButton = true;
    this.displayForm = true;
}
edit(node: OrganizationUnit) {
    this.model = this.selectedOrgUnit as OrganizationUnit;
    this.action = 'UPDATE';
    this.hideCloseButton = false;
    this.hideSaveButton = false;
    this.displayForm = true;
}
deleteChild(node: OrganizationUnit) {
    this.selectedOrgUnit.parent.children = [];
    this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
}


private expandRecursive(node: OrganizationUnit, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    }
}
modelFormSaveAction(form: FormGroup) {
    this.displayForm = false;
    this.hideCloseButton = true;
    this.hideSaveButton = true;
    let orgUnit = new OrganizationUnit();
    orgUnit.name = form.value.name;
    orgUnit.label = form.value.name;
    if( this.action === 'CREATE') {
        this.selectedOrgUnit.children.push(orgUnit);
    }
    else {
        this.selectedOrgUnit.label = orgUnit.name;
        (this.selectedOrgUnit as  OrganizationUnit).name = orgUnit.name;
    }
    let orgUnits = [...this.orgUnits];
    orgUnits[orgUnits.indexOf(this.selectedOrgUnit)] = this.selectedOrgUnit;
    this.orgUnits = orgUnits;
    this.orgUnits.forEach(o => {
        this.organizationUnitService.update(o as OrganizationUnit).subscribe(response => {
            this.orgUnits = [];
            this.orgUnits.push(response);
            this.messageService.add({severity: 'success', summary: 'Saved successfully', detail: 'Successfully Saved'});
        });
    });
}
closeFormEvent(event) {
this.displayForm = false;
}


orgToTreeNode(role: OrganizationUnit): TreeNode<OrganizationUnit> {
    return {
      label: role.name,
      data: role,
      children: role.children.map(orgToTreeNode)
    };
  }
  interface TreeNode<T> {
    label: string;
    data: T;
    expandedIcon?: string;
    collapsedIcon?: string;
    children: TreeNode<T>[];
  }
}
