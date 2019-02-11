import { Component, OnInit, Input } from '@angular/core';
import { InputControlBase } from '../../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-input-control',
  templateUrl: './dynamic-form-input-control.component.html',
  styleUrls: ['./dynamic-form-input-control.component.scss']
})
export class DynamicFormInputControlComponent {
  @Input() ctrl: InputControlBase<any>;
  @Input() form: FormGroup;
  @Input() model: any;
  constructor() {
    console.log(this.ctrl);
    console.log(this.ctrl.value);
    this.model = {name: 'james kirwa'};
  }
  get isValid() { return this.form.controls[this.ctrl.key].valid; }

}
