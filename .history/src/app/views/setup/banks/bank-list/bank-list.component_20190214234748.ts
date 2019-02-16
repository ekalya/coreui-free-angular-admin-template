import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BankService } from '../../../../core/services';
import { Bank } from '../../../../core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {

  private banksTable: any;
  public tableWidget: any;
  banks: Bank[] = [];
  @Output() selectedBank: EventEmitter<Bank> = new EventEmitter();
  selectedRow: number;
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};

  constructor(private bankService: BankService) {
    this.bankService.getAll().subscribe(banks => {
      banks.forEach(bank => {
        console.log(bank.name);
      });
    });
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

}
