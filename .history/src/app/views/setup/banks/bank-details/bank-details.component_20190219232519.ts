import { Component, OnInit, EventEmitter } from '@angular/core';
import { Bank, BankService, TableColumn, Branch } from '../../../../core';
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
  action: string;
  cols: TableColumn[] = [
    new TableColumn('code', 'Code'),
    new TableColumn('name', 'Name'),
    new TableColumn('postalAddress', 'Postal Address'),
    new TableColumn('physicalAddress', 'Physical Address'),
    new TableColumn('telephone', 'Telephone')
  ];
  constructor(private messageService: MessageService,
    private bankService: BankService,
    private bankDetailsUIService: BankDetailsUIService,
    private route: ActivatedRoute) {
    this.bankFormMetadata = this.bankDetailsUIService.getMetadata();
      const json = this.route.snapshot.queryParams['bank'];
      this.mode = this.route.snapshot.queryParams['mode'];
      if (json === JSON.stringify({})) {
        this.model = new Bank();
      } else {
        this.model = JSON.parse(json);
      }
      this.action = 'Add';
  }

  ngOnInit() {
  }
  formEmitterEventValues(form: FormGroup) {
    this.form = form;
    this.model.code = this.form.value.code;
    this.model.name = this.form.value.name;
    this.model.physicalAddress = this.form.value.physicalAddress;
    this.model.postalAddress = this.form.value.postalAddress;
    this.model.telephone = this.form.value.telephone;
    this.model.email = this.form.value.email;
  }
  branchFormEmitterEventValues(form: FormGroup) {
    const BankBranch = new BankBranch();
    branch.code = this.form.value.code;
    branch.name = this.form.value.name;
    branch.physicalAddress = this.form.value.physicalAddress;
    branch.postalAddress = this.form.value.postalAddress;
    branch.telephone = this.form.value.telephone;
    branch.email = this.form.value.email;
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
  addSaveActionMenuClick() {
    if (this.action === 'Save') {
      this.action = 'Add';
    } else {
      this.action = 'Save';
    }
  }

}
