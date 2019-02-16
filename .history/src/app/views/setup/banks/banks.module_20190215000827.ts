import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BankListComponent } from './bank-list/bank-list.component';
import { SharedModule } from 'primeng/components/common/shared';

@NgModule({
  declarations: [BankListComponent],
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
