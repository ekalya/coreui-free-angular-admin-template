import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BankDetailsUIService } from '../../banks/bank-details/bank-details-ui.service';
import { BankService, Bank } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { DataSharingService } from '../../../../core/services';
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss'],
  providers: [ MessageService ]
})
export class BankListComponent implements OnInit {

  title = 'Banks';
  listItems: Bank[] = [];
  selectedBank: Bank;

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
  private router: Router,
  private dataSharingService: DataSharingService) {
  this.controls = this.bankDetailsUIService.getMetadata();
  console.log(this.controls);
}

ngOnInit(): void {
  this.dataSharingService.currentDataSet.subscribe(data => {
    console.log(data);
  })
  this.bankService.getAll().subscribe(data => {
    this.listItems = data;
    data.forEach(b => {
         b.branches.forEach(br => {
           console.log(br.name);
         });
    });
  });

  this.bankService.selectedBank.subscribe((b: Bank) => {
    console.log(b);
  })

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
listActionMenuClick(data) {
  console.log('start ....');
  console.log(this.selectedBank);
  console.log(data.action);
  this.dataSharingService.changeDataSet(this.selectedBank);
  console.log('end .....');

  if (data.action === 'CREATE') {
    this.dataSharingService.changeDataSet(new Bank());
    this.dataSharingService.changeActionSet('CREATE');
  this.router.navigate(['/setup/banks/bankdetails']);
  } else if (data.action === 'UPDATE') {
    this.dataSharingService.changeActionSet('UPDATE');
    this.dataSharingService.changeDataSet(this.cloneObj(this.selectedBank));
    console.log(this.selectedBank);
    this.router.navigate(['/setup/banks/bankdetails']);
  } else if (data.action === 'READ') {
    this.router.navigate(['/setup/banks/bankdetails']);
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
itemSelectionChange(event) {
  console.log(event);
  console.log(this.model);
  this.selectedBank = event;
  console.log(this.selectedBank);
  this.model =this.cloneObj(this.selectedBank);
  console.log(this.model);
  this.bankService.changeCurrentBank(this.selectedBank);
  console.log(this.selectedBank);
}
cloneObj(c: any): any {
  let obj = {};
  for (let prop in c) {
      obj[prop] = c[prop];
  }
  return obj;
}
}

