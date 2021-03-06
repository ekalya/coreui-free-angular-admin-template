import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem, DialogService, MessageService } from 'primeng/api';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormGroup } from '@angular/forms';
import { DynamicFormActions } from '../../../core/enums';

@Component({
  selector: 'app-dynamic-list-plus',
  templateUrl: './dynamic-list-plus.component.html',
  styleUrls: ['./dynamic-list-plus.component.scss'],
  providers: [DialogService, MessageService]
})
export class DynamicListPlusComponent {
  @Input() public title: string;
  @Input() public listItems: any[];
  @Input() public cols: any[];

  @Output() public listActionMenuClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public itemAddedEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public itemUpdatedEvent: EventEmitter<any> = new EventEmitter<any>();
  selectedObject: any;
  first: number = 0;

  items: MenuItem[] = [
    {label: 'Details', icon: 'pi pi-search', command: () => {
        this.details();
    }},
    {label: 'Update', icon: 'pi pi-pencil', command: () => {
        this.update();
    }},
    {label: 'Delete', icon: 'pi pi-times-circle', command: () => {
        this.delete();
    }}
];

constructor(
  public dialogService: DialogService,
  private messageService: MessageService) {}

reset() {
    this.first = 0;
}

add() {
  this.listActionMenuClick.emit(DynamicFormActions.Create);
}

details() {
  if (this.selectedObject === undefined) {
    this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
      return;
  }
  this.listActionMenuClick.emit(DynamicFormActions.Read);
}
update() {
  if (this.selectedObject === undefined) {
    this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
    return;
  }
  this.listActionMenuClick.emit(DynamicFormActions.Update);
}

delete() {
  if (this.selectedObject === undefined) {
    this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
    return;
  }
  this.listActionMenuClick.emit(DynamicFormActions.Delete);
}

}
