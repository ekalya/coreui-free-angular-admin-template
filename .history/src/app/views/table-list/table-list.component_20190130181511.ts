import { Component, OnInit, Output, Input } from '@angular/core';
import { PaymentTransaction } from '../../models/payment-transaction';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  public transactions: String[]= new Array("Mary","Tom","Jack","Jill")
  constructor() {

   }

  ngOnInit() {
  }

}
