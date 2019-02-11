import { Component, OnInit, Input } from '@angular/core';
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
  payLoad = '';
  
  constructor(private ics: InputControlService) { }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.formMetaData);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
