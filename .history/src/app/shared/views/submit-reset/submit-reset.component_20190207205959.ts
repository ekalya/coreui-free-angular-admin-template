import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-submit-reset',
  templateUrl: './submit-reset.component.html',
  styleUrls: ['./submit-reset.component.scss']
})
export class SubmitResetComponent implements  OnInit {
  @Output() public actionMenuClickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  actionMenuClick(action: string) {
    this.actionMenuClickEvent.emit(action);
  }

}
