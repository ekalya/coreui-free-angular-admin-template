import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BankListComponent } from './bank-list/bank-list.component';

@NgModule({
  declarations: [BankListComponent],
  imports: [
    CommonModule,
    BanksRoutingModule
  ]
})
export class BanksModule { }
