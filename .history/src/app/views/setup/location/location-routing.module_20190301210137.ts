import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Locations'
    },
    children: [
      {
        path: '',
        redirectTo: 'locationslist'
      },
      {
        path: 'locationslist',
        component: LocationsListComponent,
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
export class LocationRoutingModule { }
