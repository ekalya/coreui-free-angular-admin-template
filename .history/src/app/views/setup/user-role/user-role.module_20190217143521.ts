import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoleRoutingModule } from './user-role-routing.module';
import { UserRoleListComponent } from './user-role-list/user-role-list.component';
import { UserRoleDetailsComponent } from './user-role-details/user-role-details.component';
import { UserRoleListViewComponent } from './user-role-list/user-role-list-view/user-role-list-view.component';

@NgModule({
  declarations: [UserRoleListComponent, UserRoleDetailsComponent, UserRoleListViewComponent],
  imports: [
    CommonModule,
    UserRoleRoutingModule
  ]
})
export class UserRoleModule { }
