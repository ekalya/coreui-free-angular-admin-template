import {Component, OnInit, EventEmitter, ElementRef, Output } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { BankService, Bank } from '../../../../core';
import { Subject } from 'rxjs';
import {  Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DynamicFormsBridge } from '../../../../src/app/core/models/dynamic-forms-bridge.model';
import { DynamicFormActions } from '../../../../core/enums';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss'],
  providers: [ MessageService ]
})
export class BankListComponent implements OnInit  {
  private banksTable: any;
  public tableWidget: any;
  banks: Bank[] = [];
  selectedRow: number;
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  selectedBank: Bank = new Bank();
  dynamicFormBridge: DynamicFormsBridge = new DynamicFormsBridge();
  constructor(private bankService: BankService, private el: ElementRef,
    private messageService: MessageService,
    private router: Router) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.bankService.getAll().subscribe(banks => {
      this.banks = banks;
      this.dtTrigger.next(true);
    });
  }

  actionMenuClick(action: DynamicFormActions) {
    if (action === DynamicFormActions.Create) {
      this.router.navigate(['/setup/banks/bankdetails'], {queryParams: {bank: JSON.stringify(new Bank()), mode: action}});
    } else if (action === DynamicFormActions.Update) {
      if (this.selectedBank.code === undefined || this.selectedBank.code === null) {
        this.messageService.add({severity: 'error', summary: 'No selected record', detail: 'No selected record'});
        return;
      }
      this.router.navigate(['/setup/banks/bankdetails'], {queryParams: {bank: JSON.stringify(this.selectedBank), mode: action}});
    } else if (action === DynamicFormActions.Read) {
      if (this.selectedBank.code === undefined || this.selectedBank.code === null) {
        this.messageService.add({severity: 'error', summary: 'No selected record', detail: 'No selected record'});
        return;
      }
      this.router.navigate(['/setup/banks/bankdetails'], {queryParams: {bank: JSON.stringify(this.selectedBank), mode: action}});
    }
  }


  selectedBankChange(bank: Bank) {
    this.selectedBank = bank;
    console.log(this.selectedBank.name);
  }
}
