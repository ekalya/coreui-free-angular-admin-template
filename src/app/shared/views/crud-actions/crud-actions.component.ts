import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crud-actions',
  templateUrl: './crud-actions.component.html',
  styleUrls: ['./crud-actions.component.scss']
})
export class CrudActionsComponent implements OnInit {
  @Output() public actionMenuClickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  actionMenuClick(action: string) {
    this.actionMenuClickEvent.emit(action);
  }

}
