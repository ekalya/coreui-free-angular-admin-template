import { Injectable } from '@angular/core';
import { InputControlBase, Company } from '../../../core/models';
import { TextBoxInputControl } from '../../../core/models';

@Injectable({
  providedIn: 'root'
})
export class CompanyUIService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getMetadata() {
 
    let metadata: InputControlBase<any>[] = [
      new TextBoxInputControl({
        key: 'name',
        label: 'Name',
        placeholder: 'Enter company name',
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
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
}
