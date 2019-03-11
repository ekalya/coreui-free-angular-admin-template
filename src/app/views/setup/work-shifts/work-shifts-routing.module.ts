import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkShiftsListComponent } from './work-shifts-list/work-shifts-list.component';
import { WorkShiftDetailsComponent } from './work-shift-details/work-shift-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Work Shifts'
    },
    children: [
      {
        path: '',
        redirectTo: 'workshifts'
      },
      {
        path: 'workshifts',
        component: WorkShiftsListComponent,
        data: {
          title: 'Work Shitfs List'
        }
      },
      {
        path: 'workshiftdetails',
        component: WorkShiftDetailsComponent,
        data: {
          title: 'Work Shift Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkShiftsRoutingModule { }
