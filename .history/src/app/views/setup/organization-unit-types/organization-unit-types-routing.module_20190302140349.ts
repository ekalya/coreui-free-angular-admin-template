import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        component: OrgUnitTypeListComponent,
        data: {
          title: 'Locations List'
        }
      },
      {
        path: 'locationdetails',
        component: LocationDetailsComponent,
        data: {
          title: 'Location Details'
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
