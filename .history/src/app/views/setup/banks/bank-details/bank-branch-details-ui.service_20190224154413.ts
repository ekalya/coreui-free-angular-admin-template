import { Injectable } from '@angular/core';
import { InputControlBase, TextBoxInputControl, Bank } from '../../../../core/models';
import { InputControlDynamicList } from '../../../../core/controls';

@Injectable({
  providedIn: 'root'
})
export class BankBranchDetailsUIService {
  constructor() {
  }
  getMetadata() {

    const metadata: InputControlBase<any>[] = [
      new TextBoxInputControl({
        key: 'code',
        label: 'Code',
        placeholder: 'Enter code',
        value: '',
        required: true,
        order: 1
      }),
      new TextBoxInputControl({
        key: 'name',
        label: 'Name',
        placeholder: 'Enter name',
        value: '',
        required: true,
        order: 2
      }),
      new TextBoxInputControl({
        key: 'postalAddress',
        label: 'Postal Address',
        placeholder: 'Enter postal address',
        value: '',
        required: true,
        order: 3
      }),
      new TextBoxInputControl({
        key: 'physicalAddress',
        label: 'Physical Address',
        placeholder: 'Enter physical address',
        value: '',
        required: true,
        order: 4
      }),
      new TextBoxInputControl({
        key: 'telephone',
        label: 'Telephone #',
        placeholder: 'Enter telephone #',
        value: '',
        order: 5
      }),
      new TextBoxInputControl({
        key: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        type: 'email',
        value: '',
        order: 6
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






