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
  model: any;
  @Input() public formMetaData: InputControlBase<any>[] = [];
  form: FormGroup;
  @Output() public formValues: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input() modelReceiver: EventEmitter<any> = new EventEmitter<any>();
  constructor(private ics: InputControlService) {
   this.model = {name: 'jogn'};
  }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.formMetaData);
    this.modelReceiver.subscribe(model => {
      this.setValues(model);
    });
  }
  onSubmit() {
    this.formValues.emit(this.form);
    this.form.reset();
  }
  setValues(model: any) {
   this.form.value.name = 'James';
  }

}
