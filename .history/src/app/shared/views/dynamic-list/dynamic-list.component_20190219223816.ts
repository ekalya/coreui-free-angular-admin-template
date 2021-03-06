import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { TableColumn } from '../../../core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent implements OnInit {
  @Input() public list: any[];
  @Input() public cols: TableColumn[];
  @Input() public dtTrigger: Subject<boolean> = new Subject<boolean>();
  @Input() public dtOptions: DataTables.Settings = {};
  private listTable: any;
  public tableWidget: any;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  setTable() {
    if (this.tableWidget) {
      this.tableWidget.destroy(); // essentially refreshes the table
      // you can also remove all rows and add new
      // this.tableWidget.clear().rows.add(this.shipments).draw();
    }

    const tableOptions: any = {
      data: this.list,
      dom: 'rt',
      select: true,
      columns: [
          { title: 'Content', data: 'content' },
          { title: 'Packages', data: 'packages' },
          { title: 'Weight', data: 'weight' }
      ]
    };

    this.listTable = $(this.el.nativeElement.querySelector('listTable'));
        this.tableWidget = this.listTable.DataTable(tableOptions);
        this.tableWidget.on('select', (e, dt, type, indexes) => {
            // I DIDN'T TRY THIS IN HERE...Just debug it and check the best way to emit an actual object
            this.selectedItemEmitter.emit(this.list[indexes[0]]);
        });

  }
  selectRow(index: number, bank: Bank) {
    this.selectedRow = index;
    this.selectedItemEmitter.emit(bank);
  }

}
