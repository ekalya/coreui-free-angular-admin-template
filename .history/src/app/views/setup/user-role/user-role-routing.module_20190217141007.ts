import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User roles list'
    },
    children: [
      {
        path: '',
        redirectTo: 'userroleslist'
      },
      {
        path: 'userroleslist',
        component: UserRoleListComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'User roles list'
        }
      },
      {
        path: 'userroledetails',
        component: UserRoleDetailsComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'User role details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoleRoutingModule { }

