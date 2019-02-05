import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { BranchesComponent } from './branches/branches.component';
import { MaterialTestTableComponent } from './material-test-table/material-test-table.component';

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
        path: 'materialtable',
        component: MaterialTestTableComponent,
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
