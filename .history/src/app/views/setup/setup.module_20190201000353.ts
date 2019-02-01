import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { SetupRoutingModule } from './setup-routing.module';
import { BranchesComponent } from './branches/branches.component';
import { BranchListComponent } from './branches/pages/branch-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
    SharedModule
  ],
  declarations: [CompanyComponent, BranchesComponent, BranchListComponent]
})
export class SetupModule { }
