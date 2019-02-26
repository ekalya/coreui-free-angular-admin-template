import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DynamicFormsBridge } from '../../../core';
import { DynamicFormActions } from '../../../core/enums';

@Component({
  selector: 'app-crud-actions',
  templateUrl: './crud-actions.component.html',
  styleUrls: ['./crud-actions.component.scss']
})
export class CrudActionsComponent implements OnInit {
  @Output() public actionMenuClickEvent: EventEmitter<any> = new EventEmitter<any>();
  dynamicFormsBridge: DynamicFormsBridge = new DynamicFormsBridge();
  constructor() { }

  ngOnInit() {
  }

  actionMenuClick(action: DynamicFormActions) {
    this.dynamicFormsBridge.dynamicFormActions = action
    this.actionMenuClickEvent.emit(action);
  }

}
