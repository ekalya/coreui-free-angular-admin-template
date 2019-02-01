import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TableComponent } from './table/table.component';
import { TableListComponent } from './pages/table-list.component';
import { DataTableComponent } from './pages/data-table.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    TableComponent,
    TableListComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    DataTablesModule
  ]
})
export class TransactionsModule {
 }
