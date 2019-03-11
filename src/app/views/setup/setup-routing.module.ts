import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { BranchesComponent } from './branches/branches.component';
import { BranchComponent } from './branches/branch.component';
import { AuthGuard } from '../../core';

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
        path: 'location',
        loadChildren: './location/location.module#LocationModule',
        data: {
          title: 'Locations'
        }
      },
      {
        path: 'jobs',
        loadChildren: './jobs/jobs.module#JobsModule',
        data: {
          title: 'Jobs'
        }
      },
      {
        path: 'positions',
        loadChildren: './positions/positions.module#PositionsModule',
        data: {
          title: 'Jobs'
        }
      },
      {
        path: 'employmentstatus',
        loadChildren: './employment-status/employment-status.module#EmploymentStatusModule',
        data: {
          title: 'Jobs'
        }
      },
      {
        path: 'paygrades',
        loadChildren: './pay-grades/pay-grades.module#PayGradesModule',
        data: {
          title: 'Pay Grades'
        }
      },
      {
        path: 'workshifts',
        loadChildren: './work-shifts/work-shifts.module#WorkShiftsModule',
        data: {
          title: 'Pay Grades'
        }
      },
      {
        path: 'nationalities',
        loadChildren: './nationalities/nationalities.module#NationalitiesModule',
        data: {
          title: 'Nationalities'
        }
      },
      {
        path: 'organization-units',
        loadChildren: './organization-units/organization-units.module#OrganizationUnitsModule',
        data: {
          title: 'Org Units'
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
