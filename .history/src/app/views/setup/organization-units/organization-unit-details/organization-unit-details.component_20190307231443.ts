import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { OrganizationUnitService, LocationService } from '../../../../core/services';
import { OrganizationUnitUIService } from '../organization-unit-ui.service';
import { InputControlBase, OrganizationUnit, Location } from '../../../../core/models';
import { FormGroup } from '@angular/forms';
import { LocationUIService } from '../../location/location-details/location-ui.service';

@Component({
  selector: 'app-organization-unit-details',
  templateUrl: './organization-unit-details.component.html',
  styleUrls: ['./organization-unit-details.component.scss'],
  providers: [MessageService]
})
export class OrganizationUnitDetailsComponent implements OnInit, OnChanges {
  @Output() public formCloseEvent: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  controls: InputControlBase<any>[] = [];
  @Input() public model: OrganizationUnit;
  newOrg: OrganizationUnit = new OrganizationUnit();
  orgUnits: TreeNode[];
  @Input() public action: any;
  hideSaveButton: boolean;
  hideCloseButton: boolean;
  displayLocationsList: boolean;
  locations_list_title: string;
  locations: Location[];
  locationsColumns: any[];
  locationName: string;
  constructor(
    private organizationUnitService: OrganizationUnitService,
    private messageService: MessageService,
    private organizationUnitUIService: OrganizationUnitUIService,
    private locationService: LocationService,
    private locationUIService: LocationUIService) {
      this.controls = this.organizationUnitUIService.getMetadata();
      this.hideSaveButton = true;
      this.hideCloseButton = true;
      this.locations_list_title = "Select location";
    }

  ngOnInit() {
    this.organizationUnitService.getAll().subscribe(data => {
      this.orgUnits = data;
      console.log(this.orgUnits);
    });
    this.locationService.getAll().subscribe(data => {
      this.locations = data;
    });
    this.locationsColumns = this.locationUIService.getColumns();
  }
  ngOnChanges() {
    this.displayValues();
  }
  formEmitterEvent(form: FormGroup) {
  this.form = form;
  }
  actionMenuClickEvent(event) {
    if (this.action === 'CREATE') {
      this.newOrg.name = this.form.value.name;
      this.addChildToOrgUnit(this.newOrg , this.model, this.orgUnits as OrganizationUnit[]);
    } else if (this.action === 'UPDATE') {
      this.model.name = this.form.value.name;
      this.updateOrgUnit(this.model, this.orgUnits as OrganizationUnit[]);
    }
    this.orgUnits.forEach(org => {
      this.organizationUnitService.update(org as OrganizationUnit).subscribe(data => {
        this.messageService.add({severity: 'success', summary: 'updated successfully', detail: 'Successfully updated'});
      });
    });
    this.formCloseEvent.emit('CLOSE');
  }
  toggleShowLocationsList() {
    this.displayLocationsList = !(this.displayLocationsList === true);
  }
  itemSelectedItemChange(location: any) {
    if (this.action === 'CREATE') {
      this.newOrg.location = location;
    } else if (this.action === 'UPDATE') {
      this.model.location = location;
    }
    this.locationName = location.name;
  }
  displayValues() {
  if (this.model && this.model.location) {
    this.locationName = this.model.location.name;
  }
  }

  updateOrgUnit(updatedOrgUnit: OrganizationUnit, orgs: OrganizationUnit[]) {
    orgs.forEach((org: OrganizationUnit) => {
        if (org.id === updatedOrgUnit.id) {
          this.setValues(org, updatedOrgUnit);
          return;
        }
        org.children.forEach(child => {
          if (org.id === updatedOrgUnit.id) {
            this.setValues(org, updatedOrgUnit);
            return;
          }
        });
        this.updateOrgUnit(updatedOrgUnit, org.children);
    });
}
setValues(old: OrganizationUnit, updated: OrganizationUnit) {
  old.name = updated.name;
  old.location = updated.location;
}
}
