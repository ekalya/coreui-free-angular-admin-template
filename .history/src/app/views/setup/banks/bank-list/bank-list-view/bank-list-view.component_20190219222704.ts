import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { User, Bank, TableColumn } from '../../../../../core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bank-list-view',
  templateUrl: './bank-list-view.component.html',
  styleUrls: ['./bank-list-view.component.scss']
})
export class BankListViewComponent implements OnInit {
  @Input() public banks: Bank[];
  @Input() public dtTrigger: Subject<boolean> = new Subject<boolean>();
  @Input() public dtOptions: DataTables.Settings = {};
  selectedRow: number;
  @Output() public selectedBankEmitter: EventEmitter<Bank> = new EventEmitter<Bank>();

  private banksTable: any;
  public tableWidget: any;
  cols: TableColumn[] = [
    new TableColumn('code', 'Code'),
    new TableColumn('name', 'Name'),
    new TableColumn('postalAddress', 'Postal Address'),
    new TableColumn('physicalAddress', 'Physical Address'),
    new TableColumn('telephone', 'Physical Address')
  ];
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  oadBanks() {
    if (this.tableWidget) {
      this.tableWidget.destroy(); // essentially refreshes the table
      // you can also remove all rows and add new
      // this.tableWidget.clear().rows.add(this.shipments).draw();
    }

    const tableOptions: any = {
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
            // I DIDN'T TRY THIS IN HERE...Just debug it and check the best way to emit an actual object
            this.selectedBankEmitter.emit(this.banks[indexes[0]]);
        });

  }
  selectRow(index: number, bank: Bank) {
    this.selectedRow = index;
    this.selectedBankEmitter.emit(bank);
  }

}
