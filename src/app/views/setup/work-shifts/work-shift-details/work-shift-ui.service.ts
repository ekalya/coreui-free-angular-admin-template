import { Injectable } from '@angular/core';
import { InputControlBase, UIInterface } from '../../../../core/models';
import { InputControlTextBox, InputControlTimeOnlyTo, InputControlTimeOnlyFrom } from '../../../../core/controls';


@Injectable({
  providedIn: 'root'
})
export class WorkShiftUIService implements UIInterface {

  getMetadata() {

    const metadata: InputControlBase<any>[] = [
      new InputControlTextBox({
        key: 'name',
        label: 'name',
        placeholder: 'Enter name',
        value: '',
        required: true,
        order: 1
      }), new InputControlTimeOnlyFrom({
        key: 'fromT',
        label: 'From',
        placeholder: 'Enter shift start time',
        value: '',
        required: true,
        order: 1
      }), new InputControlTimeOnlyTo({
        key: 'toT',
        label: 'To',
        placeholder: 'Enter shift end time',
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
    if (md.controlType === 'textbox'
    || md.controlType === 'timeOnlyFrom'
    || md.controlType === 'timeOnlyTo') {
      columns.push({ field: md.key, header: md.key });
    }
  });
  return columns;
  }
}

