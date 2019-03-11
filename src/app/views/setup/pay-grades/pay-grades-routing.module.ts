import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayGradesListComponent } from './pay-grades-list/pay-grades-list.component';
import { PayGradeDetailComponent } from './pay-grade-detail/pay-grade-detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pay Grades'
    },
    children: [
      {
        path: '',
        redirectTo: 'paygrades'
      },
      {
        path: 'paygrades',
        component: PayGradesListComponent,
        data: {
          title: 'Pay Grades List'
        }
      },
      {
        path: 'paygradedetails',
        component: PayGradeDetailComponent,
        data: {
          title: 'Pay Grade Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayGradesRoutingModule { }
