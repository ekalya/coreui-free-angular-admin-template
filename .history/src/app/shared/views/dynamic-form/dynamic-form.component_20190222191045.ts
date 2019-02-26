import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputControlService } from '../../../core/services/input-control.service';
import { InputControlBase } from '../../../core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { DynamicFormActions } from '../../../core/enums';

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
  @Input() public hideSaveButton: boolean;

  form: FormGroup;
  @Output() public formValues: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() public formEmitterEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  action: DynamicFormActions = DynamicFormActions.Read;
  constructor(
    private ics: InputControlService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef) {
  }

  ngOnInit() {
    if (this.config.data.controls) {
      this.formMetaData = this.config.data.controls;
    }
    if (this.config.data.model) {
      this.model = this.config.data.model;
    }
    if (this.config.data.hideSaveButton) {
      this.hideSaveButton = this.config.data.hideSaveButton;
    }
    if (this.config.data.action) {
      this.action = this.config.data.action;
    }
    this.form = this.ics.toFormGroup(this.formMetaData);

    this.form.valueChanges.subscribe(status => {
      this.formEmitterEvent.emit(this.form);
    });

    this.modelReceiver.subscribe(model => {
      this.model = model;
      this.setValues();
    });
    this.setValues();
    this.action.toggleSaveButton();
  }
  onSubmit() {
    this.formValues.emit(this.form);
    this.ref.close(this.form);
  }
  setValues() {
    console.log(this.model);
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
    if (this.action === DynamicFormActions.Create) {
      this.form.reset();
    }
  }
  toggleSaveButton() {
    if (this.action === DynamicFormActions.Read) {
      this.hideSaveButton = true;
    }
  }

}
