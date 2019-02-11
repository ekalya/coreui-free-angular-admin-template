import { Injectable } from '@angular/core';
import { InputControlBase } from '..';
import { DropdownInputControl } from '../models/dropdown-input-control.model';
import { TextBoxInputControl } from '../models/text-box-input-control.model';

@Injectable({
  providedIn: 'root'
})
export class TillnumberMetadataService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getMetadata() {
 
    let metadata: InputControlBase<any>[] = [
      new TextBoxInputControl({
        key: 'tillnumber',
        label: 'Tillnumber',
        value: '',
        required: true,
        order: 1
      }),
      new TextBoxInputControl({
        key: 'email',
        label: 'email',
        type:'email',
        value: '',
        required: true,
        order: 2
      }),
      new TextBoxInputControl({
        key: 'age',
        label: 'Age',
        type: 'number',
        order: 3
      }),
      new TextBoxInputControl({
        key: 'dob',
        label: 'Date of birth',
        type: 'date',
        order: 4
      }),
      new TextBoxInputControl({
        key: 'password',
        label: 'Password',
        type: 'password',
        order: 5
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
}

