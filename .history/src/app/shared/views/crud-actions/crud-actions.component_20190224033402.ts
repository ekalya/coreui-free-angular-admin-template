import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DynamicFormActions, ButtonActions } from '../../../core/enums';

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

  actionMenuClick(action: DynamicFormActions) {
    this.actionMenuClickEvent.emit(action);
  }
  Create() { 
    this.actionMenuClickEvent.emit(DynamicFormActions.Create);
  }
  Read() { 
    this.actionMenuClickEvent.emit(DynamicFormActions.Read);
  }
  Update() { 
    this.actionMenuClickEvent.emit(DynamicFormActions.Update);
  }
  Delete() { 
    this.actionMenuClickEvent.emit(DynamicFormActions.Delete);
  }

}
