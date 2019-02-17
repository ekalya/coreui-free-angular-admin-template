import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthGuard } from '../../../core';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'userslist'
      },
      {
        path: 'userslist',
        component: UsersListComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Users List'
        }
      },
      {
        path: 'userdetails',
        component: UsersDetailsComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'User Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
