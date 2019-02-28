import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [CurrenciesListComponent, CurrencyDetailsComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    SharedModule
  ]
})
export class CurrencyModule { }
