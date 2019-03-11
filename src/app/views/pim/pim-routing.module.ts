import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'PIM'
    },
    children: [
      {
        path: '',
        redirectTo: 'employees'
      },
      {
        path: 'employees',
        component: EmployeesListComponent,
        data: {
          title: 'Company'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PIMRoutingModule { }
