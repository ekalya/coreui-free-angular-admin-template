import { Injectable } from '@angular/core';
import { InputControlBase, TextBoxInputControl } from '../../../../core/models';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsUIService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getMetadata() {
 
    let metadata: InputControlBase<any>[] = [
      new TextBoxInputControl({
        key: 'username',
        label: 'Name',
        placeholder: 'Enter username',
        value: '',
        required: true,
        order: 1
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
}

