import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TableComponent } from './table/table.component';
import { DataTableComponent } from './pages/data-table.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TableComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule
  ]
})
export class TransactionsModule {
 }
