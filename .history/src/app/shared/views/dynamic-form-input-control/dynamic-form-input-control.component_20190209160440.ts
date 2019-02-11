import { Component, OnInit, Input } from '@angular/core';
import { InputControlBase } from '../../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-input-control',
  templateUrl: './dynamic-form-input-control.component.html',
  styleUrls: ['./dynamic-form-input-control.component.scss']
})
export class DynamicFormInputControlComponent implements OnInit{
  
  @Input() ctrl: InputControlBase<any>;
  @Input() form: FormGroup;
  @Input() model: any;

  ngOnInit(): void {
    console.log(this.form.value);
    console.log(this.form.value.name);
    this.model = {name: 'james kirwa'};
  }
  get isValid() { return this.form.controls[this.ctrl.key].valid; }

}
