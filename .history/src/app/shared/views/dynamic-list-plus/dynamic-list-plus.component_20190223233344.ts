import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem, DialogService, MessageService } from 'primeng/api';
import { FormGroup } from '@angular/forms';
import { DynamicFormActions } from '../../../core/enums';
import { DynamicFormsBridge, InputControlBase } from '../../../core';

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
  @Output() public sendModelToFormEmitter: EventEmitter<any> = new EventEmitter<any>();

  dynamicFormsBridge: DynamicFormsBridge = new DynamicFormsBridge();

  /*  Dialog Model attributes */
  dynamicDialogBridge: DynamicFormsBridge = new DynamicFormsBridge();
  @Output() public sendModelToDynamicDialog: EventEmitter<any> = new EventEmitter<any>();


  selectedObject: any;
  obj: any = {};
  first: number = 0;
  showForm: boolean;
  displayDialog: boolean;

  items: MenuItem[] = [
    {label: 'Details', icon: 'pi pi-search', command: () => {
        this.details();
    }},
    {label: 'Update', icon: 'pi pi-pencil', command: () => {
        this.update();
    }},
    {label: 'Delete', icon: 'pi pi-times-circle', command: () => {
        this.delete();
    }},
    {label: 'Shwo Dialog', icon: 'pi pi-times-circle', command: () => {
        this.showDialog();
    }}
  ];

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService) {
      this.showForm = false;
      this.dynamicDialogBridge.showCloseButton = true;
      this.dynamicDialogBridge.showSaveButton = true;
      this.dynamicFormsBridge.showCloseButton = true;
      this.dynamicFormsBridge.showSaveButton = true;
    }

  reset() {
      this.first = 0;
  }

  add() {
    this.dynamicFormsBridge.dynamicFormActions = DynamicFormActions.Create;
    this.listActionMenuClick.emit(this.dynamicFormsBridge);
    this.showForm = true;
  }

  details() {
    if (this.selectedObject === undefined) {
      this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
        return;
    }
    this.dynamicFormsBridge.dynamicFormActions = DynamicFormActions.Read;
    this.dynamicFormsBridge.data = this.selectedObject;
    this.listActionMenuClick.emit(this.dynamicFormsBridge);
    this.model = this.cloneObj(this.selectedObject);
    this.showForm = true;
  }
  modelFormSaveAction(form: FormGroup) {
    this.showForm = false;
    console.log(form.value);
    if (this.dynamicFormsBridge.dynamicFormActions === DynamicFormActions.Read) {
        return;
    }
    let listItems = [...this.listItems];
    console.log(DynamicFormActions.Create);
    if (this.dynamicFormsBridge.dynamicFormActions === DynamicFormActions.Create) {
      console.log('add new ......................');
      this.listItems.push(form.value);
    } else {
      console.log('update list');
      listItems[this.listItems.indexOf(this.selectedObject)] = form.value;
      console.log(this.listItems.indexOf(this.selectedObject));
    }
    this.listItems = listItems;
  }
  dynamicDialogModelSaveAction(form: FormGroup) {
    console.log(form.value);
  }
  modelFormEmitterEventValues(form: FormGroup) {
    console.log(form.value);
  }
  dynamicDialogFormValuesEvent(form: FormGroup) {
    console.log(this.listItems[this.listItems.indexOf(this.selectedObject)]);
    console.log(form.value);
  }
  update() {
    if (this.selectedObject === undefined) {
      this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
      return;
    }
    this.dynamicFormsBridge.dynamicFormActions = DynamicFormActions.Update;
    this.dynamicFormsBridge.data = this.selectedObject;
    this.listActionMenuClick.emit(this.dynamicFormsBridge);
    this.model = this.cloneObj(this.selectedObject);
    this.showForm = true;
  }

  delete() {
    if (this.selectedObject === undefined) {
      this.messageService.add({severity: 'error', summary: 'No record selected', detail: 'This action requires an item to be selected'});
      return;
    }
    this.dynamicFormsBridge.dynamicFormActions = DynamicFormActions.Delete;
    this.dynamicFormsBridge.data = this.selectedObject;
    this.listActionMenuClick.emit(this.dynamicFormsBridge);
  }
  onRowSelect(event) {
    this.obj = this.cloneObj(event.data);
    this.model = this.cloneObj(this.selectedObject);
    this.sendModelToFormEmitter.emit(this.model);
    console.log(this.listItems.indexOf(this.selectedObject));
  }
  cloneObj(c: any): any {
    let obj = {};
    for (let prop in c) {
        obj[prop] = c[prop];
    }
    return obj;
  }
  closeFormEvent(status: any) {
    this.showForm = false;
  }
  dynamicDialogCloseEvent(event) {
    this.displayDialog = false;
  }
  save() {
    this.displayDialog = false;
  }
  showDialog() {
    this.dynamicDialogBridge.dynamicFormActions = DynamicFormActions.Read;
    this.dynamicDialogBridge.showCloseButton = true;
    this.dynamicDialogBridge.showSaveButton = true;
    this.displayDialog = true;
    this.sendModelToDynamicDialog.emit(this.obj);
  }
}
