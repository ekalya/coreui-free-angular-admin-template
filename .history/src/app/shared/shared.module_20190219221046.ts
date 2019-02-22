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
import { SubmitResetComponent } from './views/submit-reset/submit-reset.component';
import { ListComponent } from './views/list/list.component';
import { DynamicFormComponent } from './views/dynamic-form/dynamic-form.component';
import { DynamicFormInputControlComponent } from './views/dynamic-form-input-control/dynamic-form-input-control.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { DynamicListComponent } from './views/dynamic-list/dynamic-list.component';

@NgModule({
  declarations: [
    DropdownSearchComponent,
    AlertComponent,
    ChartBodyComponent,
    ChartFooterComponent,
    ArrayToCommaDelimitedPipe,
    CrudActionsComponent,
    SubmitResetComponent,
    ListComponent,
    DynamicFormComponent,
    DynamicFormInputControlComponent,
    DynamicListComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ChartsModule,
    MaterialModule,
    PrimeNGModule,
    NgxPopper,
    FormsModule,
    ReactiveFormsModule,
    DynamicListComponent
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
    PrimeNGModule,
    SubmitResetComponent,
    ListComponent,
    DynamicFormComponent,
    DynamicFormInputControlComponent
  ]
})
export class SharedModule { }
