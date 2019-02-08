import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-reset',
  templateUrl: './submit-reset.component.html',
  styleUrls: ['./submit-reset.component.scss']
})
export class SubmitResetComponent implements  OnInit {
  @Output() public actionMenuClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() public formGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  actionMenuClick(action: string) {
    this.actionMenuClickEvent.emit(action);
  }

}
