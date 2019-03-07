import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgUnitTypesListComponent } from './org-unit-types-list/org-unit-types-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Organization Unit Types'
    },
    children: [
      {
        path: '',
        redirectTo: 'orgunittypeslist'
      },
      {
        path: 'orgunittypeslist',
        component: OrgUnitTypesListComponent,
        data: {
          title: 'Locations List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationUnitTypesRoutingModule { }
