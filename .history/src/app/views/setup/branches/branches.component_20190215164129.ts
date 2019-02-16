import {Component, OnInit, AfterViewInit, EventEmitter, ElementRef, Output } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { BranchesService, Branch } from '../../../core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit  {
  private branchesTable: any;
  public tableWidget: any;
  branches: Branch[] = [];
  @Output() branchSelected: EventEmitter<Branch> = new EventEmitter();
  selectedRow: number;
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  selectedName: string;
  selectedBranch: Branch = new Branch();
  constructor(private branchesService: BranchesService,
    private el: ElementRef,
    private router: Router) {}

  ngOnInit() {
    console.log('init ......');
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.branchesService.getAll().subscribe(data => {
      this.branches = data;
      console.log('data arrived .....');
      this.dtTrigger.next(true);
    });
    this.loadBranches();
  }
  loadBranches() {
    if (this.tableWidget) {
      this.tableWidget.destroy(); // essentially refreshes the table
      // you can also remove all rows and add new
      // this.tableWidget.clear().rows.add(this.shipments).draw();
    }

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

  actionMenuClick(action: string) {
    console.log(action);
    if (action === 'CREATE') {
      this.router.navigate(['/setup/branch'], {queryParams: {branch: JSON.stringify(new Branch()), mode: action}});
    } else if (action === 'EDIT') {
      this.router.navigate(['/setup/branch'], {queryParams: {branch: JSON.stringify(this.selectedBranch), mode: action}});
    } else if (action === 'DETAILS') {
      this.router.navigate(['/setup/branch'], {queryParams: {branch: JSON.stringify(this.selectedBranch), mode: action}});
    }
  }

  public selectRow(index: number, branch: Branch) {
  this.selectedRow = index;
  this.selectedName = branch.name;
  this.selectedBranch = branch;
  console.log(this.selectedBranch);
  }

}
