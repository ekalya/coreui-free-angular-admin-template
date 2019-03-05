import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationUnitsRoutingModule } from './organization-units-routing.module';
import { OrganizationUnitsComponent } from './organization-units/organization-units.component';
import { SharedModule } from '../../../shared';
@NgModule({
  declarations: [OrganizationUnitsComponent],
  imports: [
    CommonModule,
    OrganizationUnitsRoutingModule,
    SharedModule
  ]
})
export class OrganizationUnitsModule { }
