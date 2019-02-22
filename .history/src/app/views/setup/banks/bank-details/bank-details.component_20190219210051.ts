import { Component, OnInit } from '@angular/core';
import { Bank, BankService } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss'],
  providers: [MessageService]
})
export class BankDetailsComponent implements OnInit {
  model: Bank = new Bank();
  mode: string;
  form: FormGroup;
  constructor(private messageService: MessageService, private bankService: BankService) { }

  ngOnInit() {
  }
  formEmitterEventValues(form: FormGroup) {
    this.form = form;
    this.model.code = this.form.value.code;
    this.model.name = this.form.value.name;
  }
  submitResetActionMenuClick(action: string) {
    if (action === 'SUBMIT') {
        if (this.mode === 'CREATE') {
          this.bankService.create(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
          });
        } else if (this.mode === 'EDIT') {
          this.bankService.update(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Saved successfully', detail: 'Successfully updated'});
          });
        }
    }
  }

}
