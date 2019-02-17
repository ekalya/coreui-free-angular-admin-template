import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListViewComponent } from './users-list/users-list-view/users-list-view.component';

@NgModule({
  declarations: [UsersListComponent, UsersDetailsComponent, UsersListViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
