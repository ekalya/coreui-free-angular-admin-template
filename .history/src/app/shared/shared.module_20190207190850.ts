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
import { MaterialModule } from './material/material.module';
import { NgxPopper } from 'angular-popper';
import { SaveActionComponent } from './views/save-action/save-action.component';
import { SubmitResetComponent } from './views/submit-reset/submit-reset.component';

@NgModule({
  declarations: [
    DropdownSearchComponent,
    AlertComponent,
    ChartBodyComponent,
    ChartFooterComponent,
    ArrayToCommaDelimitedPipe,
    CrudActionsComponent,
    SaveActionComponent,
    SubmitResetComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ChartsModule,
    MaterialModule,
    NgxPopper
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
    CrudActionsComponent,
    MaterialModule,
    SubmitResetComponent
  ]
})
export class SharedModule { }
