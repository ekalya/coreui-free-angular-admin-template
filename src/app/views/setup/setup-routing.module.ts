import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { BranchesComponent } from './branches/branches.component';
import { BranchComponent } from './branches/branch.component';
import { AuthGuard } from '../../core';
import { BankListComponent } from './banks/bank-list/bank-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
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
        path: 'banks',
        loadChildren: './banks/banks.module#BanksModule',
        data: {
          title: 'Banks'
        }
      },
      {
        path: 'currency',
        loadChildren: './currency/currency.module#CurrencyModule',
        data: {
          title: 'Currencies'
        }
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'user-role',
        loadChildren: './user-role/user-role.module#UserRoleModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'tests',
        loadChildren: './test/test.module#TestModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
