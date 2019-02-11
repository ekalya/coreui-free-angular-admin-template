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

  @Input() formMetaData: InputControlBase<any>[] = [];
  form: FormGroup;
  @Output() formValues: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private ics: InputControlService) { }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.formMetaData);
  }
  onSubmit() {
    this.formValues.emit(this.form);
  }

}
