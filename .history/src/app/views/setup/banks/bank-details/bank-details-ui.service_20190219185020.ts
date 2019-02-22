import { Injectable } from '@angular/core';
import { InputControlBase, TextBoxInputControl } from '../../../../core/models';

@Injectable({
  providedIn: 'root'
})
export class BankDetailsUIService {
  getMetadata() {
 
    let metadata: InputControlBase<any>[] = [
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
        order: 1
      }),
      new TextBoxInputControl({
        key: 'postalAddress',
        label: 'Postal Address',
        placeholder: 'Enter postal address',
        value: '',
        required: true,
        order: 1
      }),
      new TextBoxInputControl({
        key: 'physicalAddress',
        label: 'Physical Address',
        placeholder: 'Enter physical address',
        value: '',
        required: true,
        order: 1
      }),
      new TextBoxInputControl({
        key: 'telephone',
        label: 'Telephone #',
        placeholder: 'Enter telephone #',
        value: '',
        order: 1
      }),
      new TextBoxInputControl({
        key: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        type: 'email',
        value: '',
        order: 1
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
}
