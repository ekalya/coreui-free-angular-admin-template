import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem, DialogService, MessageService } from 'primeng/api';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormGroup } from '@angular/forms';

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
  @Input() public controls: any[];
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
  if (this.controls === undefined) {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Error'});
    return;
  }
  this.listActionMenuClick.emit('add');
  const ref = this.dialogService.open(DynamicFormComponent, {
    data: {
      controls: this.controls,
      model: this.selectedObject,
      hideSaveButton: false,
      mode: 'CREATE'
    },
    header: 'Add an object',
    width: '70%'
});

ref.onClose.subscribe((form: FormGroup) => {
    this.itemAddedEvent.emit(form);
});

}

details() {
  if (this.controls === undefined) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Error'});
      return;
    }
    this.listActionMenuClick.emit('add');
    const ref = this.dialogService.open(DynamicFormComponent, {
      data: {
        controls: this.controls,
        model: this.selectedObject,
        hideSaveButton: true,
        mode: 'DETAILS'
      },
      header: 'Add an object',
      width: '70%'
  });

  ref.onClose.subscribe((form: FormGroup) => {

  });
}
update() {
  if (this.controls === undefined) {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Error'});
    return;
  }
  const ref = this.dialogService.open(DynamicFormComponent, {
    data: {
      controls: this.controls,
      model: this.selectedObject,
      hideSaveButton: false,
      mode: 'UPDATE'
    },
    header: 'Add an object',
    width: '70%'
});

  ref.onClose.subscribe((form: FormGroup) => {
      console.log(form);
      console.log('emit.....');
      this.itemUpdatedEvent.emit(form);
  });
}

delete() {
  this.listActionMenuClick.emit('delete');
}

}
