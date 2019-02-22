import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BankDetailsUIService } from '../../banks/bank-details/bank-details-ui.service';
import { BankService, Bank } from '../../../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-dynamic-plus',
  templateUrl: './test-dynamic-plus.component.html',
  styleUrls: ['./test-dynamic-plus.component.scss'],
  providers:  [MessageService, BankDetailsUIService ]
})
export class TestDynamicPlusComponent implements OnInit {

  title = 'Tasks';
  listItems: Bank[] = [];
  cols: any[] = [{ field: 'name', header: 'Name' }, { field: 'description', header: 'Description' }];
  controls: any[];
  model: Bank = new Bank();
constructor(
  private messageService: MessageService,
  private bankService: BankService,
  private bankDetailsUIService: BankDetailsUIService) {
  this.controls = this.bankDetailsUIService.getMetadata();
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
 itemAddedEvent(form: FormGroup) {
   console.log("test dynamic plus:" + JSON.stringify(form.value));
    this.form = form;
    this.model.code = this.form.value.code;
    this.model.name = this.form.value.name;
    this.model.physicalAddress = this.form.value.physicalAddress;
    this.model.postalAddress = this.form.value.postalAddress;
    this.model.telephone = this.form.value.telephone;
    this.model.email = this.form.value.email;
   this.tasksService.create(t).subscribe(data => {
    this.listItems.push(data);
    this.messageService.add({severity:'info', summary:'Success', detail: JSON.stringify(data)});
   });

 }

}
