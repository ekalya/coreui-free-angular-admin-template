import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { DataTablesModule } from 'angular-datatables';
import { ChartBodyComponent } from './views/chart-body/chart-body.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartFooterComponent } from './views/chart-footer/chart-footer.component';
import { ArrayToCommaDelimitedPipe } from './pipes/array-to-comma-delimited.pipe';
import { CrudActionsComponent } from './views/crud-actions/crud-actions.component';


@NgModule({
  declarations: [
    DropdownSearchComponent,
    AlertComponent,
    ChartBodyComponent,
    ChartFooterComponent,
    ArrayToCommaDelimitedPipe,
    CrudActionsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ChartsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    DropdownSearchComponent,
    AlertComponent,
    ChartsModule,
    ChartBodyComponent,
    ChartFooterComponent,
    ArrayToCommaDelimitedPipe,
    CrudActionsComponent
  ]
})
export class SharedModule { }
