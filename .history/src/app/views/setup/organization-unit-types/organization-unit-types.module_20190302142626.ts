import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationUnitTypesRoutingModule } from './organization-unit-types-routing.module';
import { OrgUnitTypesListComponent } from './org-unit-types-list/org-unit-types-list.component';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [OrgUnitTypesListComponent],
  imports: [
    CommonModule,
    OrganizationUnitTypesRoutingModule,
    SharedModule
  ]
})
export class OrganizationUnitTypesModule { }
