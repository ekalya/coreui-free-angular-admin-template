import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Jobs'
    },
    children: [
      {
        path: '',
        redirectTo: 'jobslist'
      },
      {
        path: 'jobslist',
        component: JobsListComponent,
        data: {
          title: 'Jobs List'
        }
      },
      {
        path: 'jobdetails',
        component: JobDetailsComponent,
        data: {
          title: 'Job Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
