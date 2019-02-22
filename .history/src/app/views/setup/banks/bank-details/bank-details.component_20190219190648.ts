import { Component, OnInit } from '@angular/core';
import { Bank } from '../../../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
  model: Bank = new Bank();
  mode: string;
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  formEmitterEventValues(form: FormGroup) {
    this.form = form;
    this.model.username = this.form.value.username;
    this.model.password = this.form.value.password;
  }
  submitResetActionMenuClick(action: string) {
    if (action === 'SUBMIT') {
        if (this.mode === 'CREATE') {
          this.userService.create(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
          });
        } else if (this.mode === 'EDIT') {
          this.userService.update(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Saved successfully', detail: 'Successfully updated'});
          });
        }
    }
  }

}
