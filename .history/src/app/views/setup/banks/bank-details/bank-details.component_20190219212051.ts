import { Component, OnInit, EventEmitter } from '@angular/core';
import { Bank, BankService } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BankDetailsUIService } from './bank-details-ui.service';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss'],
  providers: [MessageService]
})
export class BankDetailsComponent implements OnInit {
  bankFormMetadata: any[];
  modelEmitter: EventEmitter<Bank> = new EventEmitter<Bank>();
  form: FormGroup;
  model: Bank = new Bank();
  mode: string;
  constructor(private messageService: MessageService,
    private bankService: BankService,
    private bankDetailsUIService: BankDetailsUIService,
    private route: ActivatedRoute) {
    this.bankFormMetadata = this.bankDetailsUIService.getMetadata();

      const json = this.route.snapshot.queryParams['user'];
      this.mode = this.route.snapshot.queryParams['mode'];
      if (json === JSON.stringify({})) {
        this.model = new Bank();
      } else {
        this.model = JSON.parse(json);
      }
  }

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
