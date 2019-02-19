import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BankListComponent } from './bank-list/bank-list.component';
import { SharedModule } from '../../../shared';
import { BankListViewComponent } from './bank-list/bank-list-view/bank-list-view.component';

@NgModule({
  declarations: [BankListComponent, BankListViewComponent],
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
