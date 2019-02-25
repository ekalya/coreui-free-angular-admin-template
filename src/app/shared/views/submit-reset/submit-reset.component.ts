import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonActions } from '../../../core/enums';

@Component({
  selector: 'app-submit-reset',
  templateUrl: './submit-reset.component.html',
  styleUrls: ['./submit-reset.component.scss']
})
export class SubmitResetComponent implements  OnInit {
  @Output() public actionMenuClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() public valid: Boolean = true;
  @Input() public dirty: Boolean = false;
  @Input() public mode: string;
  hidden: boolean;
  constructor() { }

  ngOnInit() {
    if (this.mode === 'DETAILS') {
      this.hidden = true;
    }
  }

  actionMenuClick(action: ButtonActions) {
    console.log('submit component  ');
    this.actionMenuClickEvent.emit(action);
  }
  reset() {
    this.actionMenuClick(ButtonActions.RESET);
  }
  submit() {
    this.actionMenuClick(ButtonActions.SUBMIT);
  }

}
