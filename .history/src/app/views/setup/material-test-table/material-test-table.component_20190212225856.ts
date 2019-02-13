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
export class MaterialTestTableComponent implements OnInit, AfterViewInit  {
  private branchesTable: any;
  public tableWidget: any;
  branches: Branch[] = [];
  @Output() branchSelected: EventEmitter<Branch> = new EventEmitter();
  constructor(private branchesService: BranchesService, private el: ElementRef) {}

  ngOnInit() {
    console.log('init ......');
    this.branchesService.getAll().subscribe(data => {
      this.branches = data;
      console.log('data arrived .....');
    });
  }

  public selectRow(index: number, row: Branch) {
    this.selectedName = 'row#' + index + ' ' + row.name;
    this.selectedRow = index;
  }
  public deleteRow(): void {
   /* this.data.pop();
    this.reInitDatatable() */
  }

  public addRow(): void {
  /*  if (this.data.length%5==0) {
      this.data.push({"name": "Anna", "lastName": "Konda"})
    } else if (this.data.length%5==1) {
      this.data.push({"name": "Wayne", "lastName": "Interessierts"})
    } else if (this.data.length%5==2) {
      this.data.push({"name": "Andy", "lastName": "Biotika"})
    } else if (this.data.length%5==3) {
      this.data.push({"name": "Niko", "lastName": "Tin"})
    } else {
      this.data.push({"name": "Mo", "lastName": "Zarella"})
    }
    this.reInitDatatable()  */
  }

  ngAfterViewInit() {
    console.log('after view init');
    this.initDatatable();
  }

  private initDatatable(): void {
    console.log('init table .................');
    let tableId: any = $('#clientsT');
    this.tableWidget = tableId.DataTable({
      select: true
    });
  }
  is_highlight(index: number) {
    if (this.selectedRow === index) {
      return true;
    }
    return false;
  }

}
