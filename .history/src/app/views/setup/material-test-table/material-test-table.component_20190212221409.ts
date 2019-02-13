import {Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Car } from './car';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { BranchesService, Branch } from '../../../core';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'material-test-table',
  styleUrls: ['./material-test-table.component.scss'],
  templateUrl: './material-test-table.component.html',
})
export class MaterialTestTableComponent implements OnInit, AfterViewInit  {
  public tableWidget: any;
  branches: Branch[] = [];
  public selectedName: string;
  selectedRow: number;

  constructor(private branchesService: BranchesService) {}

  ngOnInit() {
    this.branchesService.getAll().subscribe(data => {
      this.branches = data;
    });
  }

  public selectRow(index: number, row: Branch) {
    this.selectedName = 'row#' + index + ' ' + row.name
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
    this.initDatatable();
  }

  private initDatatable(): void {
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
