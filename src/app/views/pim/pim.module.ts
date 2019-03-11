import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PIMRoutingModule } from './pim-routing.module';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [EmployeesListComponent],
  imports: [
    CommonModule,
    PIMRoutingModule,
    SharedModule
  ]
})
export class PIMModule { }
