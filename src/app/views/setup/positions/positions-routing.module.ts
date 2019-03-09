import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionsListComponent } from './positions-list/positions-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Positions'
    },
    children: [
      {
        path: '',
        redirectTo: 'positionlist'
      },
      {
        path: 'positionlist',
        component: PositionsListComponent,
        data: {
          title: 'Positions List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionsRoutingModule { }
