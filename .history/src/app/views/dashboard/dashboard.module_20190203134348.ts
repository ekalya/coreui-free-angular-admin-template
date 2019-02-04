import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    BsDropdownModule,
    SharedModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    DashboardComponent ]
})
export class DashboardModule { }
