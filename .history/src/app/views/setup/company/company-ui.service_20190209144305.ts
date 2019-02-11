import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyUIService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getMetadata() {
 
    let metadata: InputControlBase<any>[] = [
      new TextBoxInputControl({
        key: 'tillnumber',
        label: 'Tillnumber',
        placeholder: 'Enter till number',
        value: '0878',
        required: true,
        order: 1
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
}
