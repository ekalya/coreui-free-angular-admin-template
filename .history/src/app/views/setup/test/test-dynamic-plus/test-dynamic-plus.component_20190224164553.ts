import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BankDetailsUIService } from '../../banks/bank-details/bank-details-ui.service';
import { BankService, Bank, DynamicFormsBridge } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { DynamicFormActions } from '../../../../core/enums';
import { Router, NavigationExtras } from '@angular/router';

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
  private bankDetailsUIService: BankDetailsUIService,
  private router: Router) {
  this.controls = this.bankDetailsUIService.getMetadata();
  console.log(this.controls);
}

ngOnInit(): void {
  this.bankService.getAll().subscribe(data => {
    this.listItems = data;
    data.forEach(b => {
         b.branches.forEach(br => {
           console.log(br.name);
         });
    });
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
listActionMenuClick(dynamicFormsBridge: DynamicFormsBridge) {
  console.log(dynamicFormsBridge);
  let navigationExtras: NavigationExtras = {
    queryParams: {
        "bank": dynamicFormsBridge.dynamicFormActions,
        "mode": DynamicFormActions.Update
    }
};

  if (dynamicFormsBridge.dynamicFormActions === DynamicFormActions.Create) {
    this.router.navigate(['/setup/banks/bankdetails'], {queryParams: {bank: JSON.stringify(new Bank()), mode: DynamicFormActions.Create}});
  } else if (dynamicFormsBridge.dynamicFormActions === DynamicFormActions.Update) {
    this.router.navigate(['/setup/banks/bankdetails'], {queryParams: {bank: JSON.stringify(dynamicFormsBridge.data), mode: DynamicFormActions.Update}});
  } else if (dynamicFormsBridge.dynamicFormActions === DynamicFormActions.Read) {
    this.router.navigate(['/setup/banks/bankdetails'], {queryParams: {bank: JSON.stringify(dynamicFormsBridge.data), mode: DynamicFormActions.Read}});
  }
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
