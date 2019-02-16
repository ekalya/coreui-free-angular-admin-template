import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-reset',
  templateUrl: './submit-reset.component.html',
  styleUrls: ['./submit-reset.component.scss']
})
export class SubmitResetComponent implements  OnInit {
  @Output() public actionMenuClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() public valid: Boolean = true;
  @Input() public dirty: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  actionMenuClick(action: string) {
    console.log('submit component  ');
    this.actionMenuClickEvent.emit(action);
  }

}
