import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { SetupRoutingModule } from './setup-routing.module';
import { BranchesComponent } from './branches/branches.component';
import { BranchListComponent } from './branches/pages/branch-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BranchComponent } from './branches/branch.component';
import { BranchViewComponent } from './branches/pages/branch-view.component';

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
    BranchComponent,
    BranchViewComponent
  ]
})
export class SetupModule { }
