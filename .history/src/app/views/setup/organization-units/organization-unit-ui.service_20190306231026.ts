import { Injectable } from '@angular/core';
import { InputControlBase } from '../../../core/models';
import { InputControlTextBox, InputControlSingleSelectList } from '../../../core/controls';

@Injectable({
  providedIn: 'root'
})
export class OrganizationUnitUIService {
  constructor() {
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
        key: 'name',
        label: 'name',
        placeholder: 'Enter name',
        value: '',
        required: true,
        order: 1
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

