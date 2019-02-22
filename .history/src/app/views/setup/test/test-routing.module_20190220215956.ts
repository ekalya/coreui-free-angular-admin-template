import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tests'
    },
    children: [
      {
        path: '',
        redirectTo: 'testpage'
      },
      {
        path: 'testpage',
        component: TestPageComponent,
        data: {
          title: 'Test Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
