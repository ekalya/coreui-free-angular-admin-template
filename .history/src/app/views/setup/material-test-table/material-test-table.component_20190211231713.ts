import {Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Car } from './car';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
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
    // Our array of clients
    clients: any[];
    // Our future instance of DataTable
    dataTable: any;

  cars: Car[];
  cols: any[];
  first: number =  0;
  selectedCar: Car[];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.cars = [
      {vin: '15413541', year: 2005, brand: 'toyota', color: 'red'},
      {vin: '1565766541', year: 2007, brand: 'mazda', color: 'white'},
      {vin: '1543341', year: 2009, brand: 'nissan', color: 'black'},
      {vin: '15413541', year: 2005, brand: 'toyota', color: 'red'},
      {vin: '1565766541', year: 2007, brand: 'mazda', color: 'white'},
      {vin: '1543341', year: 2009, brand: 'nissan', color: 'black'},
      {vin: '15413541', year: 2005, brand: 'toyota', color: 'red'},
      {vin: '1565766541', year: 2007, brand: 'mazda', color: 'white'},
      {vin: '1543341', year: 2009, brand: 'nissan', color: 'black'},
      {vin: '15413541', year: 2005, brand: 'toyota', color: 'red'},
      {vin: '1565766541', year: 2007, brand: 'mazda', color: 'white'},
      {vin: '1543341', year: 2009, brand: 'nissan', color: 'black'},
      {vin: '15413541', year: 2005, brand: 'toyota', color: 'red'},
      {vin: '1565766541', year: 2007, brand: 'mazda', color: 'white'},
      {vin: '1543341', year: 2009, brand: 'nissan', color: 'black'}
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];


  this.clients = [
    {firstName: 'elisha', lastName: 'kalya', company: 'techno s'},
    {firstName: 'John', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Ken', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Nak', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Elphas', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Ngengi', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Njuguna', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Mathew', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Dan', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Jackson', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Rudisha', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Angalis', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Julia', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Edward', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Elvis', lastName: 'kalya', company: 'techno s'},
    {firstName: 'India', lastName: 'kalya', company: 'techno s'},
    {firstName: 'Noah', lastName: 'kalya', company: 'techno s'}
  ];


  }

  public onRowSelected(index: number) {
    console.log(index)
  }

  ngAfterViewInit() {
    this.initDatatable();
  }

  private initDatatable(): void {
    let exampleId: any = $('#clientsT');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }

  reset() {
    this.first = 0;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
