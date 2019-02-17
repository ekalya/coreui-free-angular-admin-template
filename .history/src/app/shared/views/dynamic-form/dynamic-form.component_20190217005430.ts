import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputControlService } from '../../../core/services/input-control.service';
import { InputControlBase } from '../../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [InputControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() public model: any;
  @Input() public formMetaData: InputControlBase<any>[] = [];
  form: FormGroup;
  @Output() public formValues: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input() public modelReceiver: EventEmitter<any> = new EventEmitter<any>();
  @Input() public hideSaveButton: boolean;
  @Output() public formEmitterEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  constructor(private ics: InputControlService) {
  }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.formMetaData);

    this.form.valueChanges.subscribe(status => {
      console.log(status);
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
    if (this.model !== null) {
      this.form.patchValue(this.model);
    }
  }

}
