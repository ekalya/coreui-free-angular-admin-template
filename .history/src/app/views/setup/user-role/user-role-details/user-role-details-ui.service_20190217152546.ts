import { Injectable } from '@angular/core';
import { InputControlBase, TextBoxInputControl } from '../../../../core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleDetailsUIService {
  getMetadata() {
 
    let metadata: InputControlBase<any>[] = [
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
