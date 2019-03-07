import { Injectable } from '@angular/core';
import { InputControlBase } from '../../../core/models';
import { InputControlTextBox, InputControlSingleSelectList } from '../../../core/controls';
import { LocationUIService } from '../location/location-details/location-ui.service';
import { LocationService } from '../../../core';

@Injectable({
  providedIn: 'root'
})
export class OrganizationUnitUIService {
  constructor(private locationUIService: LocationUIService,
    private locationService: LocationService) {
  }
  getMetadata() {

    const metadata: InputControlBase<any>[] = [
      new InputControlTextBox({
        key: 'name',
        label: 'name',
        placeholder: 'Enter name',
        value: '',
        required: true,
        order: 1
      }), new InputControlSingleSelectList({
        key: 'location',
        label: 'location',
        cols: this.locationUIService.getColumns(),
        options: this.locationUIService.
        placeholder: 'Enter name',
        value: '',
        required: true,
        order: 2
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
  getColumns() {
  const columns: any[] = [];
  this.getMetadata().forEach( md => {
    console.log(md.controlType);
    if (md.controlType === 'textbox'
    || md.controlType === 'togglebutton') {
      columns.push({ field: md.key, header: md.key });
    }
  });
  return columns;
  }
}

