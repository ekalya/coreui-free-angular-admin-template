import { Component, OnInit, Output } from '@angular/core';
import { MessageService, MenuItem, TreeNode, DialogService } from 'primeng/api';
import { OrganizationUnitService, LocationService } from '../../../../core/services';
import { OrganizationUnit } from '../../../../core';
import { InputControlBase, Location } from '../../../../core/models';
import { FormGroup } from '@angular/forms';
import {  OrganizationUnitUIService} from '../organization-unit-ui.service';
import { LocationUIService } from '../../location/location-details/location-ui.service';

@Component({
selector: 'app-organization-units',
templateUrl: './organization-units.component.html',
styleUrls: ['./organization-units.component.scss'],
providers: [MessageService, DialogService]
})
export class OrganizationUnitsComponent implements OnInit {
selectedOrgUnit: TreeNode;
orgUnits: TreeNode[];
items: MenuItem[];

inputForm: Number = 2;
enableInputForm: Boolean = true;
displayOrgDetailsForm: Boolean = false;

controls: InputControlBase<any>[] = [];
model: OrganizationUnit;
action: any;
hideSaveButton: Boolean = true;
hideCloseButton: Boolean = true;

listItems: Location[] = [];
cols: any[];
title: string;
@Output() selectedValue: string;
constructor(
    public dialogService: DialogService,
    private organizationUnitService: OrganizationUnitService,
    private messageService: MessageService,
    private organizationUnitUIService: OrganizationUnitUIService,
    private locationService: LocationService,
    private locationUIService: LocationUIService ) {
        this.controls = this.organizationUnitUIService.getMetadata();
    }

ngOnInit() {
    this.loadOrgs();
    this.items = [
        {label: 'Add child', icon: 'fa fa-plus-square', command: (event) => this.addChild(this.selectedOrgUnit)},
        {label: 'Details', icon: 'pi pi-search', command: (event) => this.details(this.selectedOrgUnit)},
        {label: 'Edit', icon: 'pi pi-pencil', command: (event) => this.edit(this.selectedOrgUnit)},
        {label: 'Delete child', icon: 'fa fa-remove', command: (event) => this.deleteChild(this.selectedOrgUnit)}
    ];
    this.locationService.getAll().subscribe(data => {
        this.listItems = data;
    });
    this.cols = this.locationUIService.getColumns();
    this.title = 'Locations';
}
addChild(node: TreeNode) {
    this.model = this.selectedOrgUnit as OrganizationUnit;
    this.displayOrgDetailsForm = true;
    this.hideCloseButton = false;
    this.hideSaveButton = false;
    this.model = new OrganizationUnit();
    this.action = 'CREATE';
}
details(node: TreeNode) {
    this.model = this.selectedOrgUnit as OrganizationUnit;
    this.action = 'READ';
    this.hideCloseButton = false;
    this.hideSaveButton = true;
    this.displayOrgDetailsForm = true;
}
edit(node: TreeNode) {
    this.model = this.selectedOrgUnit as OrganizationUnit;
    this.action = 'UPDATE';
    this.hideCloseButton = false;
    this.hideSaveButton = false;
    this.displayOrgDetailsForm = true;
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
orgDetailsFormCloseEvent(event) {
this.displayOrgDetailsForm = false;
this.loadOrgs();
}
selectedItemChange(event) {
    this.selectedValue = event.name;
}

traverse(allOrgs: OrganizationUnit[]) {
    allOrgs.forEach(org => {
        org.children.forEach(child => {
            child.parent = org;
        });
        this.traverse(org.children);
    });
}
setParent(o: OrganizationUnit): void {
    this.orgUnits .forEach((org: OrganizationUnit) => {
        if (o.id ===  org.id) {
            return;
        }
        org.children.forEach(child => {
            if ( child.id === o.id) {
                o.parent = org;
                return;
            }
        });
        this.traverse(org.children);
    });
    return;
}
loadOrgs() {
    this.organizationUnitService.getAll().subscribe(data => {
        this.traverse(data);
        this.orgUnits = data;
        console.log(this.orgUnits);
    });
}
}
