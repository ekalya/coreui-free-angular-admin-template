import {Component, OnInit, EventEmitter, ElementRef, Output } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { BankService, Bank } from '../../../../core';
import { Subject } from 'rxjs';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit  {
  private banksTable: any;
  public tableWidget: any;
  banks: Bank[] = [];
  @Output() selectedBank: EventEmitter<Bank> = new EventEmitter();
  selectedRow: number;
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  constructor(private bankService: BankService, private el: ElementRef) {}

  ngOnInit() {
    console.log('init ......');
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.bankService.getAll().subscribe(data => {
      this.banks = data;
      console.log('data arrived .....');
      this.dtTrigger.next(true);
    });
    this.loadBanks();
  }
  loadBanks() {
    if (this.tableWidget) {
      this.tableWidget.destroy(); // essentially refreshes the table
      // you can also remove all rows and add new
      // this.tableWidget.clear().rows.add(this.shipments).draw();
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

    this.banksTable = $(this.el.nativeElement.querySelector('banksT'));
        this.tableWidget = this.banksTable.DataTable(tableOptions);
        this.tableWidget.on('select', (e, dt, type, indexes) => {
            // I DIDN'T TRY THIS IN HERE...Just debug it and check the best way to emit an actual object
            this.selectedBank.emit(this.banks[indexes[0]]);
        });

  }

  public selectRow(index: number, row: Bank) {
  this.selectedRow = index;
  }

}
