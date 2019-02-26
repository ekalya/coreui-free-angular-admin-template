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
  @Input() public modelReceiver: EventEmitter<any> = new EventEmitter<any>();
  @Input() public hideCloseButton: Boolean = true;
  @Input() public hideSaveButton: Boolean = true;
  @Input() public action: string;

  form: FormGroup;
  @Output() public formValues: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() public formEmitterEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() public closeFormEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private ics: InputControlService) {
  }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.formMetaData);
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
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  toggleSaveButton() {
    if (this.action  === 'READ') {
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
