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
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
}
