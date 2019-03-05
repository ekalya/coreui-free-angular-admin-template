import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationUnitsComponent } from './organization-units/organization-units.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Organization Units'
    },
    children: [
      {
        path: '',
        redirectTo: 'orgunitslist'
      },
      {
        path: 'orgunitslist',
        component: OrganizationUnitsComponent,
        data: {
          title: 'Org Unis List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationUnitsRoutingModule { }
