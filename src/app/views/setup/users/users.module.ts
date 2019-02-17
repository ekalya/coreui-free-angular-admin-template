import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListViewComponent } from './users-list/users-list-view/users-list-view.component';
import { SharedModule } from '../../../shared';
import { UserRolesPickListComponent } from './user-roles-pick-list/user-roles-pick-list.component';

@NgModule({
  declarations: [UsersListComponent, UsersDetailsComponent, UsersListViewComponent, UserRolesPickListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
