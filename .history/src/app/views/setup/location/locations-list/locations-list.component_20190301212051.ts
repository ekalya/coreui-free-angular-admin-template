import { Component, OnInit } from '@angular/core';
import { Location, InputControlBase, DynamicFormsBridge } from '../../../../core/models';
import { LocationUIService } from '../location-details/location-ui.service';
import { MessageService } from 'primeng/api';
import { FormGroup } from '@angular/forms';
import { LocationService, DataSharingService } from '../../../../core/services';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss'],
  providers: [MessageService]
})
export class LocationsListComponent implements OnInit {
  controls: InputControlBase<any>[] = [];
  dynamicFormsBridge: DynamicFormsBridge = new DynamicFormsBridge();
  form: FormGroup;
  model: Location = new Location();
  listItems: Location[] = [];
  cols: any[] = [];
  title: string;
  selectedLocation = new Location();
  showCurrencyForm: boolean;
  action: string;
  constructor(private locationService: LocationService,
    private locationUIService: LocationUIService,
    private dataSharingService: DataSharingService) {
    this.controls = this.locationUIService.getMetadata();
    this.cols = this.locationUIService.getColumns();
    this.title = 'Locations List';
    this.showCurrencyForm = false;
  }

  ngOnInit() {
    this.locationService.getAll().subscribe(data => {
      this.listItems = data;
    });
    this.dataSharingService.currentDataSet.subscribe(data => {
    });
    this.dataSharingService.currentActionSet.subscribe(data => {
      this.action = data;
    });
    this.locationService.selectedLocation.subscribe((c: Location) => {
      this.model = c;
    });
  }
  
  itemAddedEvent(addedLocation: Location) {
    this.locationService.create(addedLocation).subscribe(curr => {
      let listItems = [...this.listItems];
      listItems.push(curr);
      this.listItems = listItems;
    });

  }
  itemUpdatedEvent(updatedLocation: Location) {
    let listItems = [...this.listItems];
    if (updatedLocation.id === undefined) {
      this.locationService.create(updatedLocation).subscribe(curr => {
        this.listItems.push(curr);
      });
    } else {
      this.locationService.update(updatedLocation).subscribe(loc => {
        listItems[this.listItems.indexOf(this.selectedLocation)] = loc;
      });
    }
    this.listItems = listItems;
  }
  currencySelectedItemChange(selectedLocation: Location) {
    this.selectedLocation = selectedLocation;
  }
}
