import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputControlService } from '../../../core/services/input-control.service';
import { InputControlBase } from '../../../core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';

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
  constructor(
    private ics: InputControlService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef) {
  }

  ngOnInit() {
    if (this.config.data.controls) {
      this.formMetaData = this.config.data.controls;
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
  }
  onSubmit() {
    this.formValues.emit(this.form);
    this.form.reset();
  }
  setValues() {
    console.log(this.model);
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

}
