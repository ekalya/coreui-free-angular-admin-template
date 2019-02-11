import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TillNumberMetadataService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
 
    let questions: InputControlBase<any>[] = [
 
      new DropdownInputControl({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
 
      new TextBoxInputControl({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
 
      new TextBoxInputControl({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
 
    return questions.sort((a, b) => a.order - b.order);
  }
}
