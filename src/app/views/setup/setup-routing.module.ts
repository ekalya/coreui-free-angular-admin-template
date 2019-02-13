import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { BranchesComponent } from './branches/branches.component';
import { MaterialTestTableComponent } from './material-test-table/material-test-table.component';
import { BranchComponent } from './branches/branch.component';
import { AuthGuard } from '../../core';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Setup'
    },
    children: [
      {
        path: '',
        redirectTo: 'company'
      },
      {
        path: 'company',
        component: CompanyComponent,
        data: {
          title: 'Company'
        }
      },
      {
        path: 'branches',
        component: BranchesComponent,
        data: {
          title: 'Branches'
        }
      },
      {
        path: 'branch',
        component: BranchComponent,
        data: {
          title: 'Branch'
        }
      },
      {
        path: 'materialtable',
        component: MaterialTestTableComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Material Table'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
