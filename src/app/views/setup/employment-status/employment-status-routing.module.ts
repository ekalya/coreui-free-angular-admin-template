import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentStatusListComponent } from './employment-status-list/employment-status-list.component';
import { EmploymentStatusDetailsComponent } from './employment-status-details/employment-status-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employment Status'
    },
    children: [
      {
        path: '',
        redirectTo: 'employmentstatuslist'
      },
      {
        path: 'employmentstatuslist',
        component: EmploymentStatusListComponent,
        data: {
          title: 'Employment Status List'
        }
      },
      {
        path: 'employmentstatusdetails',
        component: EmploymentStatusDetailsComponent,
        data: {
          title: 'Employment Status Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentStatusRoutingModule { }
