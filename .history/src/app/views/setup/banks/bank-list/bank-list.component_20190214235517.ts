import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
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

  constructor(private bankService: BankService, private el: ElementRef) {
    this.bankService.getAll().subscribe(banks => {
      this.banks = banks;
      banks.forEach(bank => {
        console.log(bank.name);
      });
    });
  }

  ngOnInit() {
    this.setTable();
  }

  setTable() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    if (this.tableWidget) {
      this.tableWidget.destroy();
    }
    let tableOptions: any = {
      data: this.banks,
      dom: 'rt',
      select: true,
      columns: [
          { title: 'Content', data: 'content' },
          { title: 'Packages', data: 'packages' },
          { title: 'Weight', data: 'weight' }
      ]
    };

    this.banksTable = $(this.el.nativeElement.querySelector('banksTable'));
        this.tableWidget = this.banksTable.DataTable(tableOptions);
        this.tableWidget.on('select', (e, dt, type, indexes) => {
            this.selectedBank.emit(this.banks[indexes[0]]);
        });

  }

}
