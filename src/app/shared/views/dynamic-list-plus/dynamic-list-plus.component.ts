import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MenuItem, DialogService, MessageService } from 'primeng/api';
import { FormGroup } from '@angular/forms';
import { InputControlBase, DataSharingService } from '../../../core';

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

  /* Individual Object form */
  @Input() public controls: InputControlBase<any>[] = [];
  @Input() public model: any;

  @Output() public listActionMenuClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public itemAddedEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public itemUpdatedEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public itemDeleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public itemSelectionChange: EventEmitter<any> = new EventEmitter<any>();


  /**
   * Property to enable diable input form
   */
  @Input() public enableInputForm: Boolean = false;
  /**
   * property to select the input form.
   * 1 = Inline form, 2 = Dialog form
   */
  @Input() public inputForm: Number = 1;
  @Input() public menuHidden: boolean;
  selectedItem: any;
  selectedObject: any;
  obj: any = {};
  first: number = 0;
  displayForm: boolean;
  action: string;
  hideSaveButton: boolean;
  hideCloseButton: boolean;
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
    private messageService: MessageService) {
      this.displayForm = false;
      this.hideSaveButton = true;
      this.hideCloseButton = true;
  }

  reset() {
      this.first = 0;
  }

  add() {
    this.action = 'CREATE';
    this.listActionMenuClick.emit({action: this.action});
    this.displayForm = true;
    this.hideSaveButton = false;
    this.hideCloseButton = true;
  }

  details() {
    this.action = 'READ';
    if (this.selectedObject === undefined) {
      this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
        return;
    }
    this.listActionMenuClick.emit({action: this.action});
    this.model = this.listItems[this.listItems.indexOf(this.selectedObject)];
    this.displayForm = true;
    this.hideSaveButton = true;
    this.hideCloseButton = false;
  }
  update() {
    this.action = 'UPDATE';
    if (this.selectedObject === undefined) {
      this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
      return;
    }


    this.listActionMenuClick.emit({action: this.action});
    this.model = this.cloneObj(this.listItems[this.listItems.indexOf(this.selectedObject)]);
    this.displayForm = true;
    this.hideSaveButton = false;
    this.hideCloseButton = true;
  }

  delete() {
    this.action = 'DELETE';
    if (this.selectedObject === undefined) {
      this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
      return;
    }
    this.itemDeleteEvent.emit(this.selectedObject);
  }
  modelFormSaveAction(form: FormGroup) {
    this.displayForm = false;
    let listItems = [...this.listItems];
    if (this.action === 'CREATE') {
     listItems.push(form.value);
     this.itemAddedEvent.emit(form.value);
    } else {
     listItems[this.listItems.indexOf(this.selectedObject)] = form.value;
     listItems[this.listItems.indexOf(this.selectedObject)].id = this.selectedObject.id
     this.itemUpdatedEvent.emit(form.value);
    }
    this.listItems = listItems;
  }
  onRowSelect(event) {
    this.model = this.listItems[this.listItems.indexOf(this.selectedObject)];
    this.itemSelectionChange.emit(this.listItems[this.listItems.indexOf(this.selectedObject)]);
  }
  cloneObj(c: any): any {
    let obj = {};
    for (let prop in c) {
        obj[prop] = c[prop];
    }
    return obj;
  }
  closeFormEvent(status: any) {
    this.displayForm = false;
  }
  dynamicDialogCloseEvent(event) {
    this.displayForm = false;
  }
  save() {
    this.displayForm = false;
  }
}
