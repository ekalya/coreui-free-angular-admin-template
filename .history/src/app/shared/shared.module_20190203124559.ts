import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { DataTablesModule } from 'angular-datatables';
import { ChartBodyComponent } from './views/chart-body/chart-body.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DropdownSearchComponent,
    AlertComponent,
    ChartBodyComponent
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
    AlertComponent
  ]
})
export class SharedModule { }
