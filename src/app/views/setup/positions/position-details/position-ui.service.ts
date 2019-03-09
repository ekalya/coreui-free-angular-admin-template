import { Injectable } from '@angular/core';
import { InputControlBase } from '../../../../core/models';
import { InputControlTextBox } from '../../../../core/controls';

@Injectable({
  providedIn: 'root'
})
export class PositionUIService {

  getMetadata() {

    const metadata: InputControlBase<any>[] = [
      new InputControlTextBox({
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
    if (md.controlType === 'textbox') {
      columns.push({ field: md.key, header: md.key });
    }
  });
  return columns;
  }
}

