import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkShiftsRoutingModule } from './work-shifts-routing.module';
import { WorkShiftsListComponent } from './work-shifts-list/work-shifts-list.component';
import { WorkShiftDetailsComponent } from './work-shift-details/work-shift-details.component';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [WorkShiftsListComponent, WorkShiftDetailsComponent],
  imports: [
    CommonModule,
    WorkShiftsRoutingModule,
    SharedModule
  ]
})
export class WorkShiftsModule { }
