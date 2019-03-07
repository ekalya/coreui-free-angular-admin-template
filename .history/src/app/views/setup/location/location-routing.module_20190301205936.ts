import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        path: 'currencieslist',
        component: LocationsListComponent,
        data: {
          title: 'Currencies List'
        }
      },
      {
        path: 'currencydetails',
        component: CurrencyDetailsComponent,
        data: {
          title: 'Currency Detail'
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
