import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BankListComponent } from './bank-list/bank-list.component';
import { SharedModule } from '../../../shared';
import { BankListViewComponent } from './bank-list/bank-list-view/bank-list-view.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';

@NgModule({
  declarations: [BankListComponent, BankListViewComponent, BankDetailsComponent],
  imports: [
    CommonModule,
    BanksRoutingModule,
    SharedModule
  ],
  exports: [
    BankListComponent
  ]
})
export class BanksModule { }
