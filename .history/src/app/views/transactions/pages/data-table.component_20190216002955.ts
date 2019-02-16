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
    console.log(t.posTransactionNumber);
    if (t.posTransactionNumber === null || t.posTransactionNumber === '') {
      console.log('nullll pos TT #');
      return false;
    }
    return t.posTransactionNumber === null ? false : true;
  }

}
