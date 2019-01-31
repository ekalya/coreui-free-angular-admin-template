import { Component, OnInit } from '@angular/core';
import { PaymentConfirmation } from '../../../models/payment-confirmation';
import { PaymentConfirmationService } from '../../../services/payment-confirmation.service';
import { PaymentConfirmationList } from '../../../models/payment-confirmation-list';
import { PaymentTransaction } from '../../../models/payment-transaction';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  paymentTransactions: PaymentTransaction[];
  testUser = 'james';
  constructor(private paymentConfirmationService: PaymentConfirmationService) { }

  ngOnInit() {
    this.paymentConfirmationService.getAll().subscribe(data => {
      console.log(data.paymentConfirmation);
      this.paymentTransactions =data.paymentConfirmation
    });
  }

}
