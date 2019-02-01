import { Component, OnInit } from '@angular/core';
import { PaymentTransaction, PaymentConfirmationService } from '../../../core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  paymentTransactions: PaymentTransaction[] = [];
  dtTrigger: Subject<PaymentTransaction[]> = new Subject<PaymentTransaction[]>();
  dtOptions: DataTables.Settings = {};
  constructor(private paymentConfirmationService: PaymentConfirmationService) { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3
    };

    this.paymentConfirmationService.getAll().subscribe(data => {
      this.paymentTransactions = data.paymentConfirmation
      this.dtTrigger.next(this.paymentTransactions);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



}
