import { Component, OnInit } from '@angular/core';
import { MessageService, MenuItem, TreeNode } from 'primeng/api';
import { OrganizationUnitService } from '../../../../core/services';
import { OrganizationUnit } from '../../../../core';
import { InputControlBase } from '../../../../core/models';
import { FormGroup } from '@angular/forms';

@Component({
selector: 'app-organization-units',
templateUrl: './organization-units.component.html',
styleUrls: ['./organization-units.component.scss'],
providers: [MessageService]
})
export class OrganizationUnitsComponent implements OnInit {
selectedOrgUnit: TreeNode;
orgUnits: TreeNode[];
items: MenuItem[];

inputForm: Number = 2;
enableInputForm: Boolean = true;
displayForm: Boolean = false;

controls: InputControlBase<any>[] = [];
model: any;
action: any;
hideSaveButton: Boolean = true;
hideCloseButton: Boolean = true;

constructor(
    private organizationUnitService: OrganizationUnitService,
    private messageService: MessageService,
    private organizationUnitUIService: OrganizationUnitUIService) { 
        this.controls = this.organizationUnitUIService.getMetadata();
    }

ngOnInit() {
    this.organizationUnitService.getAll().subscribe(data => {
    this.orgUnits = data;
    console.log('data....');
    console.log(data);
    console.log('end data');
});
this.items = [
    {label: 'Add child', icon: 'fa fa-plus-square', command: (event) => this.addChild(this.selectedOrgUnit)},
    {label: 'Delete child', icon: 'fa fa-remove', command: (event) => this.deleteChild(this.selectedOrgUnit)}
];
}
addChild(node: TreeNode) {
    this.displayForm = true;
    this.hideCloseButton = false;
    this.hideSaveButton = false;
}

deleteChild(node: TreeNode) {
    this.selectedOrgUnit.parent.children = [];
    this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
}


private expandRecursive(node: TreeNode, isExpand: boolean) {
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
    this.selectedOrgUnit.children.push(orgUnit);
    console.log(this.selectedOrgUnit);
    let orgUnits = [...this.orgUnits];
    orgUnits[orgUnits.indexOf(this.selectedOrgUnit)] = this.selectedOrgUnit;
    this.orgUnits = orgUnits;
    console.log(this.orgUnits);
    this.orgUnits.forEach(o => {
    console.log(o);
        this.organizationUnitService.update(o as OrganizationUnit).subscribe(response => {
            console.log(response);
            this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
        });
    });
}
closeFormEvent(event) {

}

}
