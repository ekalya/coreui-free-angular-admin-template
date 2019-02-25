import { Component, OnInit, EventEmitter } from '@angular/core';
import { Bank, BankService, TableColumn, BankBranch, DataSharingService } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BankDetailsUIService } from './bank-details-ui.service';
import { BankBranchDetailsUIService } from './bank-branch-details-ui.service';
import { DynamicFormsBridge, InputControlBase } from '../../../../core/models';
import { DynamicFormActions, ButtonActions } from '../../../../core/enums';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss'],
  providers: [MessageService]
})
export class BankDetailsComponent implements OnInit {
  bankFormMetadata: any[];
  modelEmitter: EventEmitter<Bank> = new EventEmitter<Bank>();
  dynamicFormsBridge: DynamicFormsBridge = new DynamicFormsBridge();
  form: FormGroup;
  model: Bank = new Bank();
  branches: BankBranch[] = [];
  branch_controls: InputControlBase<any>[] = [];
  branchColumns: any[] = [];
  branch_list_title: string;
  branchModel: BankBranch = new BankBranch();
  selectedBranch = new BankBranch();
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
    private bankBranchDetailsUIService: BankBranchDetailsUIService,
    private route: ActivatedRoute,
    private dataSharingService: DataSharingService) {
      console.log(dataSharingService.data.selectedObject);
      console.log( this.dataSharingService.data.action);

      this.model = this.dataSharingService.data.selectedObject;
      this.dynamicFormsBridge.dynamicFormActions = dataSharingService.data.action;

      console.log(this.model);
      console.log(this.dynamicFormsBridge.dynamicFormActions);

    this.bankFormMetadata = this.bankDetailsUIService.getMetadata();
    this.branch_controls = this.bankBranchDetailsUIService.getMetadata();
    this.branchColumns = this.bankBranchDetailsUIService.getColumns();
    this.branch_list_title = 'Branches List';
    this.dynamicFormsBridge.showSaveButton = false;
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
    this.model.branches = this.form.value.branches;
    console.log(form.value);
  }
  branchSaveAction(form: FormGroup) {
    const branch: BankBranch = new BankBranch();
    branch.code = form.value.code;
    branch.name = form.value.name;
    branch.physicalAddress = form.value.physicalAddress;
    branch.postalAddress = form.value.postalAddress;
    branch.telephone = form.value.telephone;
    branch.email = form.value.email;
    this.model.branches.push(branch);
    console.log(JSON.stringify(branch));
    this.showBranchForm = false;
  }
  branchFormEmitterEventValues(form: FormGroup) {
    this.selectedBranch.code = form.value.code;
    this.selectedBranch.name = form.value.name;
    this.selectedBranch.physicalAddress = form.value.physicalAddress;
    this.selectedBranch.postalAddress = form.value.postalAddress;
    this.selectedBranch.telephone = form.value.telephone;
    this.selectedBranch.email = form.value.email;
    console.log(form.value);
  }
  submitResetActionMenuClick(action: ButtonActions) {
    console.log(this.model);
    console.log(this.form.value);
    console.log(action);
    console.log(ButtonActions.SUBMIT);
    console.log(this.dynamicFormsBridge.dynamicFormActions);
    if (action.valueOf() === ButtonActions.SUBMIT.valueOf()) {
        console.log('inside process submitt...........');
        if (this.dynamicFormsBridge.dynamicFormActions.valueOf() === DynamicFormActions.Create.valueOf()) {
          console.log('create.............');
          this.bankService.create(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
          });
        } else {
          console.log('update.............');
          this.bankService.update(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Saved successfully', detail: 'Successfully updated'});
          });
        }
    } else {
      console.log('not supported.........action');
    }
  }
  addSaveActionMenuClick() {
    if (this.showBranchForm === true) {
      this.showBranchForm = false;
    } else {
      this.showBranchForm = true;
    }
  }
  itemAddedEvent(newBranch: BankBranch) {
    console.log(' branch added....');
  }
  itemUpdatedEvent(newBranch: BankBranch) {
    console.log(' branch updated....');
  }

  valueChange(event) {
    console.log(event);
  }

}
