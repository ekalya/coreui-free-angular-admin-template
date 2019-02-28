import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Currencies'
    },
    children: [
      {
        path: '',
        redirectTo: 'currencieslist'
      },
      {
        path: 'currencieslist',
        component: CurrenciesListComponent,
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
export class CurrencyRoutingModule { }
