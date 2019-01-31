import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TableComponent } from './table/table.component';
import { TableListComponent } from '../../views/table-list/table-list.component';

@NgModule({
  declarations: [
    TableComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule {
 }
