import { Injectable } from '@angular/core';
import { InputControlBase, UIInterface } from '../../../../core/models';
import { InputControlTextBox } from '../../../../core/controls';

@Injectable({
  providedIn: 'root'
})
export class EmployeeUIService implements UIInterface {

  getMetadata() {

    const metadata: InputControlBase<any>[] = [
      new InputControlTextBox({
        key: 'empCode',
        label: 'Emp Code',
        placeholder: 'Enter emp code',
        value: '',
        required: true,
        order: 1
      }), new InputControlTextBox({
        key: 'firstName',
        label: 'First Name',
        placeholder: 'Enter first name',
        value: '',
        required: true,
        order: 2
      }), new InputControlTextBox({
        key: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter last name',
        value: '',
        required: true,
        order: 3
      }), new InputControlTextBox({
        key: 'otherName',
        label: 'Other Name',
        placeholder: 'Enter other name',
        value: '',
        required: false,
        order: 4
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

