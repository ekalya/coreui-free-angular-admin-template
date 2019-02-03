import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    DropdownSearchComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
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
