import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentStatusRoutingModule } from './employment-status-routing.module';
import { EmploymentStatusListComponent } from './employment-status-list/employment-status-list.component';
import { EmploymentStatusDetailsComponent } from './employment-status-details/employment-status-details.component';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [EmploymentStatusListComponent, EmploymentStatusDetailsComponent],
  imports: [
    CommonModule,
    EmploymentStatusRoutingModule,
    SharedModule
  ]
})
export class EmploymentStatusModule { }
