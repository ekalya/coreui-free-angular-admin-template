import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
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
  form: FormGroup;
  controls: InputControlBase<any>[] = [];
  @Input() public model: OrganizationUnit;
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
    this.locationService.getAll().subscribe(data => {
      this.locations = data;
    });
    this.locationsColumns = this.locationUIService.getColumns();
  }
  ngOnChanges(){
    this.displayValues();
  }
  formEmitterEvent(form: FormGroup){
   this.form = form;
  }
  actionMenuClickEvent(event) {
    console.log(event);
    console.log(this.model);
  }
  toggleShowLocationsList(){
    this.displayLocationsList = !(this.displayLocationsList === true);
  }
  itemSelectedItemChange(location: any) {
    this.locationName = location.name;
    this.model.location = location;
  }
  displayValues() {
   if(this.model && this.model.location){
     this.locationName = this.model.location.name;
   }
  }

}
