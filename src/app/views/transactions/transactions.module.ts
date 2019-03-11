import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TableComponent } from './table/table.component';
import { DataTableComponent } from './pages/data-table.component';
import { SharedModule } from '../../shared/shared.module';
import { TransactionsService } from '../../core/services';


@NgModule({
  declarations: [
    TableComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule
  ],
  providers: [TransactionsService]
})
export class TransactionsModule {
}
