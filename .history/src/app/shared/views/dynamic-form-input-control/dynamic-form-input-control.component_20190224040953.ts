import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputControlBase } from '../../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-input-control',
  templateUrl: './dynamic-form-input-control.component.html',
  styleUrls: ['./dynamic-form-input-control.component.scss']
})
export class DynamicFormInputControlComponent{

  @Input() ctrl: InputControlBase<any>;
  @Input() form: FormGroup;
  @Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() public modelReceiver: EventEmitter<any> = new EventEmitter<any>();
  get isValid() { return this.form.controls[this.ctrl.key].valid; }
  fireValueChange(key: string, event: any) {
    console.log('value change........' + key);

    this.valueChange.emit(event);
  }

}
