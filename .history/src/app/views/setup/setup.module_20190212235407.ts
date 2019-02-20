import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { SetupRoutingModule } from './setup-routing.module';
import { BranchesComponent } from './branches/branches.component';
import { BranchListComponent } from './branches/pages/branch-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialTestTableComponent } from './material-test-table/material-test-table.component';
import { BranchComponent } from './branches/branch.component';
import { BranchViewComponent } from './branches/pages/branch-view.component';
import { ItemsListComponent } from './material-test-table/pages/items-list.component';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
    SharedModule
  ],
  declarations: [
    CompanyComponent, 
    BranchesComponent, 
    BranchListComponent, 
    MaterialTestTableComponent, BranchComponent, BranchViewComponent, ItemsListComponent]
})
export class SetupModule { }