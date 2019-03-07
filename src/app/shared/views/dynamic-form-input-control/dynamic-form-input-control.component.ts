import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputControlBase } from '../../../core';
import { FormGroup } from '@angular/forms';
import {  ToggleButton } from 'primeng/primeng';

@Component({
  selector: 'app-dynamic-form-input-control',
  templateUrl: './dynamic-form-input-control.component.html',
  styleUrls: ['./dynamic-form-input-control.component.scss']
})
export class DynamicFormInputControlComponent {

  @Input() ctrl: InputControlBase<any>;
  @Input() form: FormGroup;
  @Output() public valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() public selectedValue: string;
  displayList: boolean;
  get isValid() { return this.form.controls[this.ctrl.key].valid; }
  fireValueChange(key: string, event: any) {
    this.valueChange.emit(event);
  }
  itemSelectedItemChange(selectedItem: any) {
    this.selectedValue = (this.ctrl.displayValueKey === undefined ? '' : selectedItem[this.ctrl.displayValueKey]);
    this.ctrl.value = selectedItem;
    this.form.controls[this.ctrl.key].setValue(this.selectedValue);
  }
  toggleList(){
    this.displayList = !(this.displayList === true);
  }

}
