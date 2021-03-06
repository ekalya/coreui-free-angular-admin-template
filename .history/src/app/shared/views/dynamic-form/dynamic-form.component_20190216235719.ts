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
  constructor(private ics: InputControlService) {
  }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.formMetaData);
    this.modelReceiver.subscribe(model => {
      this.model = model;
    });
    this.setValues(this.model);
  }
  onSubmit() {
    this.formValues.emit(this.form);
    this.form.reset();
  }
  setValues(model: any) {
   this.form.patchValue(model);
  }

}
