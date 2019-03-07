import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationUnitTypesRoutingModule } from './organization-unit-types-routing.module';
import { OrgUnitTypesListComponent } from './org-unit-types-list/org-unit-types-list.component';

@NgModule({
  declarations: [OrgUnitTypesListComponent],
  imports: [
    CommonModule,
    OrganizationUnitTypesRoutingModule
  ]
})
export class OrganizationUnitTypesModule { }
