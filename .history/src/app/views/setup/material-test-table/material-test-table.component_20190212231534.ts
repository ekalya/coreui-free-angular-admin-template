import {Component, OnInit, AfterViewInit, EventEmitter, ElementRef, Output } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { BranchesService, Branch } from '../../../core';
import { Subject } from 'rxjs';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'material-test-table',
  styleUrls: ['./material-test-table.component.scss'],
  templateUrl: './material-test-table.component.html',
})
export class MaterialTestTableComponent implements OnInit  {
  private branchesTable: any;
  public tableWidget: any;
  branches: Branch[] = [];
  @Output() branchSelected: EventEmitter<Branch> = new EventEmitter();
  selectedRow: number;
  dtTrigger: Subject<boolean>;
  constructor(private branchesService: BranchesService, private el: ElementRef) {}

  ngOnInit() {
    console.log('init ......');
    this.loadBranches();
  }
  loadBranches() {
    if (this.tableWidget) {
      this.tableWidget.destroy(); // essentially refreshes the table
      // you can also remove all rows and add new
      // this.tableWidget.clear().rows.add(this.shipments).draw();
    }
    this.branchesService.getAll().subscribe(data => {
      this.branches = data;
      console.log('data arrived .....');
      this.dtTrigger.next(true);
    });
    let tableOptions: any = {
      data: this.branches,
      dom: 'rt',
      select: true,
      columns: [
          { title: 'Content', data: 'content' },
          { title: 'Packages', data: 'packages' },
          { title: 'Weight', data: 'weight' }
      ]
    };

    this.branchesTable = $(this.el.nativeElement.querySelector('clientsT'));
        this.tableWidget = this.branchesTable.DataTable(tableOptions);
        this.tableWidget.on('select', (e, dt, type, indexes) => {
            // I DIDN'T TRY THIS IN HERE...Just debug it and check the best way to emit an actual object
            this.branchSelected.emit(this.branches[indexes[0]]);
        });

  }

  public selectRow(index: number, row: Branch) {
  this.selectedRow = index;
  }

}
