import { Component, OnInit, EventEmitter } from '@angular/core';
import { Bank, BankService, TableColumn, BankBranch } from '../../../../core';
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
  selectedBranch = new BankBranch();
  mode: string;
  showBranchForm: boolean;
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
      this.showBranchForm = false;
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
  branchSaveAction(form: FormGroup) {
    console.log('save branch.....');
  this.model.branches.push(this.selectedBranch);
  this.showBranchForm = false;
  }
  branchFormEmitterEventValues(form: FormGroup) {
    this.selectedBranch.code = form.value.code;
    this.selectedBranch.name = form.value.name;
    this.selectedBranch.physicalAddress = form.value.physicalAddress;
    this.selectedBranch.postalAddress = form.value.postalAddress;
    this.selectedBranch.telephone = form.value.telephone;
    this.selectedBranch.email = form.value.email;
    console.log(JSON.stringify(this.selectedBranch));
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
    if (this.showBranchForm === true) {
       this.showBranchForm = false;
    } else {
      this.showBranchForm = true;
    }
  }

}