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
        key: 'name',
        label: 'Name',
        placeholder: 'Enter company name',
        value: '',
        required: true,
        order: 1
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
}
