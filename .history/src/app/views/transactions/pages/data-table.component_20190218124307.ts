import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { PaymentTransaction } from '../../../core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() public transactions: PaymentTransaction[];
  @Input() public dtOptions: DataTables.Settings;
  @Input() public dtTrigger: Subject<boolean>;

  constructor() { }

  ngOnInit() {
  }
  utilized(t: PaymentTransaction) {
    if (t.posTransactionNumber) {
      return true;
    }
    return false;
  }

  selectRow(index: number, paymentTransaction: PaymentTransaction) {
    this.selectedRow = index;
  }

}
