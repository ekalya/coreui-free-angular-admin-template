import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaymentTransaction, PaymentConfirmationService } from '../../../core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  paymentTransactions: PaymentTransaction[] = [];
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  constructor(private paymentConfirmationService: PaymentConfirmationService) { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };

    this.paymentConfirmationService.getAll().subscribe(data => {
      this.paymentTransactions = data.paymentConfirmation;
      this.dtTrigger.next(true);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
