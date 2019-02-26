import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputControlService } from '../../../core/services/input-control.service';
import { InputControlBase } from '../../../core';
import { FormGroup } from '@angular/forms';
import { DynamicFormActions } from '../../../core/enums';
import { DynamicFormsBridge } from '../../../core/models';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [InputControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() public model: any;
  @Input() public formMetaData: InputControlBase<any>[] = [];
  @Input() public modelReceiver: EventEmitter<any> = new EventEmitter<any>();
  @Input() public dynamicFormsBridge: DynamicFormsBridge  = new DynamicFormsBridge();
  @Input() public hideCloseButton: Boolean = true;
  form: FormGroup;
  @Output() public formValues: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() public formEmitterEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() public closeFormEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  hideSaveButton: boolean;
  constructor(
    private ics: InputControlService) {
  }

  ngOnInit() {
    console.log(this.formMetaData);
    this.form = this.ics.toFormGroup(this.formMetaData);
    console.log(this.form);
    this.form.valueChanges.subscribe(status => {
      this.formEmitterEvent.emit(this.form);
    });

    this.modelReceiver.subscribe(model => {
      this.model = model;
      this.setValues();
    });
    this.setValues();
    this.toggleSaveButton();
  }
  onSubmit() {
    this.formValues.emit(this.form);
  }
  setValues() {
    console.log(this.model);
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
    if (this.dynamicFormsBridge.dynamicFormActions === DynamicFormActions.Create) {
      this.form.reset();
    }
  }
  toggleSaveButton() {
    if (this.dynamicFormsBridge.dynamicFormActions  === DynamicFormActions.Read) {
      this.hideSaveButton = true;
    }
  }
  closeForm() {
    this.closeFormEventEmitter.emit(true);
  }
  valueChange(key: string, event: any) {
    this.form.value[key] = event;
    this.formEmitterEvent.emit(this.form);
  }

}
