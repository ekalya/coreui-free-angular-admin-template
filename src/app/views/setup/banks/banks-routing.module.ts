import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Banks'
    },
    children: [
      {
        path: '',
        redirectTo: 'bankslist'
      },
      {
        path: 'bankslist',
        component: BankListComponent,
        data: {
          title: 'Banks List'
        }
      },
      {
        path: 'bankdetails',
        component: BankDetailsComponent,
        data: {
          title: 'Bank Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanksRoutingModule { }
