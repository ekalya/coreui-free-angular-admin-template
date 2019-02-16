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
        label: 'Till Number',
        placeholder: 'Enter till number',
        value: '',
        required: true,
        order: 1
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
}

