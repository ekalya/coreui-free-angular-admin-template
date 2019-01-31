import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PaymentTransaction } from '../../models/payment-transaction';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input() public testValue: string;
  @Input() public transactions: PaymentTransaction[];
  @Output() public search: EventEmitter<String> = new EventEmitter();
  searchKey: string;
  constructor() {

   }

  ngOnInit() {
  }

  onSearch() {
    this.search.emit(this.searchKey);
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.onSearch();
    }
  }

}
