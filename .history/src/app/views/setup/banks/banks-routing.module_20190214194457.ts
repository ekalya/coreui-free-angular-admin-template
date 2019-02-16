import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankListComponent } from './bank-list/bank-list.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanksRoutingModule { }
