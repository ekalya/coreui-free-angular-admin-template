import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationUnitsRoutingModule } from './organization-units-routing.module';
import { OrganizationUnitsComponent } from './organization-units/organization-units.component';
import { SharedModule } from '../../../shared';
import { OrganizationUnitDetailsComponent } from './organization-unit-details/organization-unit-details.component';
@NgModule({
  declarations: [OrganizationUnitsComponent, OrganizationUnitDetailsComponent],
  imports: [
    CommonModule,
    OrganizationUnitsRoutingModule,
    SharedModule
  ]
})
export class OrganizationUnitsModule { }
