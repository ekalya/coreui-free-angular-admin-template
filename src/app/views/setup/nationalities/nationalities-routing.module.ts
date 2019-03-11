import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationalitiesListComponent } from './nationalities-list/nationalities-list.component';
import { NationalityDetailsComponent } from './nationality-details/nationality-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Nationalities'
    },
    children: [
      {
        path: '',
        redirectTo: 'nationalities'
      },
      {
        path: 'nationalities',
        component: NationalitiesListComponent,
        data: {
          title: 'Nationality List'
        }
      },
      {
        path: 'nationalitydetails',
        component: NationalityDetailsComponent,
        data: {
          title: 'Nationality Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NationalitiesRoutingModule { }
