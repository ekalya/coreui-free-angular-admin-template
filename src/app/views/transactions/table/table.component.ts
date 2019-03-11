import { Component } from '@angular/core';
import { PaymentTransaction } from '../../../core';
import { PaymentTransactionsUIService } from './payment-transactions-ui.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  paymentTransactions: PaymentTransaction[] = [];
  title: string;
  cols: any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentTransactionsUIService: PaymentTransactionsUIService) {
      this.activatedRoute.data.subscribe((res) => {
        this.paymentTransactions = res.trans.paymentConfirmation;
      });
      this.title = 'Transactions List';
      this.cols = this.paymentTransactionsUIService.getColumns();
    }

    itemSelectedChangeEvent(event) {

    }
}
