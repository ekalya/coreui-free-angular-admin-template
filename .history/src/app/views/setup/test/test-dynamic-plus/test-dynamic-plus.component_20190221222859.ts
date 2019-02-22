import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BankDetailsUIService } from '../../banks/bank-details/bank-details-ui.service';
import { BankService } from '../../../../core';

@Component({
  selector: 'app-test-dynamic-plus',
  templateUrl: './test-dynamic-plus.component.html',
  styleUrls: ['./test-dynamic-plus.component.scss'],
  providers:  [MessageService, BankDetailsUIService ]
})
export class TestDynamicPlusComponent implements OnInit {

  title = 'Tasks';
  listItems: Task[] = [];
  cols:any[] = [{ field: 'name', header: 'Name' }, { field: 'description', header: 'Description' }];
  controls: any[];

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
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Saved'});
}

update() {
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Deleted'});
}
 itemAddedEvent(form: FormGroup){
   console.log("test dynamic plus:" + JSON.stringify(form.value));
   const t = new Task();
   t.name = form.value.name;
   t.description = form.value.description;
   this.tasksService.create(t).subscribe(data => {
    this.listItems.push(data);
    this.messageService.add({severity:'info', summary:'Success', detail: JSON.stringify(data)});
   });

 }

}
