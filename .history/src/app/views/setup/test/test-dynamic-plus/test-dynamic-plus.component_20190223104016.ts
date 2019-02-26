import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BankDetailsUIService } from '../../banks/bank-details/bank-details-ui.service';
import { BankService, Bank } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { DynamicFormActions } from '../../../../core/enums';

@Component({
  selector: 'app-test-dynamic-plus',
  templateUrl: './test-dynamic-plus.component.html',
  styleUrls: ['./test-dynamic-plus.component.scss'],
  providers:  [MessageService, BankDetailsUIService ]
})
export class TestDynamicPlusComponent implements OnInit {

  title = 'Banks';
  listItems: Bank[] = [];

  cols: any[] = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'postalAddress', header: 'Postal Address' },
    { field: 'physicalAddress', header: 'Physical Address' },
    { field: 'telephone', header: 'Telephone' },
    { field: 'email', header: 'Email' }
  ];
  controls: any[];
  model: Bank = new Bank();
  form: FormGroup;

constructor(
  private messageService: MessageService,
  private bankService: BankService,
  private bankDetailsUIService: BankDetailsUIService) {
  this.controls = this.bankDetailsUIService.getMetadata();
  console.log(this.controls);
}

ngOnInit(): void {
  this.bankService.getAll().subscribe(data => {
    this.listItems = data;
  });

}

save() {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Data Saved'});
}

update() {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Data Updated'});
}

delete() {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Data Deleted'});
}
listActionMenuClick(dynamicFormActions: DynamicFormActions) {
  console.log(dynamicFormActions);
}
itemAddedEvent(form: FormGroup) {
    this.form = form;
    this.model.code = this.form.value.code;
    this.model.name = this.form.value.name;
    this.model.physicalAddress = this.form.value.physicalAddress;
    this.model.postalAddress = this.form.value.postalAddress;
    this.model.telephone = this.form.value.telephone;
    this.model.email = this.form.value.email;
    this.bankService.create(this.model).subscribe(data => {
    this.listItems.push(data);
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'Saved'});
  });

}
itemUpdatedEvent(data: any) {
  this.form = data.payload;
  this.model.id = data.id;
  this.model.code = this.form.value.code;
  this.model.name = this.form.value.name;
  this.model.physicalAddress = this.form.value.physicalAddress;
  this.model.postalAddress = this.form.value.postalAddress;
  this.model.telephone = this.form.value.telephone;
  this.model.email = this.form.value.email;
  this.bankService.update(this.model).subscribe(bnk => {
    this.listItems = this.listItems.filter( b => b.id !== bnk.id);
    this.listItems.push(bnk);
    this.messageService.add({severity: 'info', summary: 'Updated', detail: 'Updated' });
  });

}

}
