import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoleRoutingModule } from './user-role-routing.module';
import { UserRoleListComponent } from './user-role-list/user-role-list.component';
import { UserRoleDetailsComponent } from './user-role-details/user-role-details.component';
import { UserRoleListViewComponent } from './user-role-list/user-role-list-view/user-role-list-view.component';
import { SharedModule } from '../../../shared';
import { RoleAuthorityPickListComponent } from './role-authority-pick-list/role-authority-pick-list.component';

@NgModule({
  declarations: [UserRoleListComponent, UserRoleDetailsComponent, UserRoleListViewComponent, RoleAuthorityPickListComponent],
  imports: [
    CommonModule,
    UserRoleRoutingModule,
    SharedModule
  ]
})
export class UserRoleModule { }
