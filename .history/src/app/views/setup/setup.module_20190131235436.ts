import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { SetupRoutingModule } from './setup-routing.module';
import { BranchesComponent } from './branches/branches.component';
import { BranchListComponent } from './branches/pages/branch-list.component';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule
  ],
  declarations: [CompanyComponent, BranchesComponent, BranchListComponent]
})
export class SetupModule { }
