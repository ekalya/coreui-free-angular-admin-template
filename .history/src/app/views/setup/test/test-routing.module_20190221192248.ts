import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';

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
      },
      {
        path: 'testdynamicplus',
        component: TestPageComponent,
        data: {
          title: 'Test Dynamic Plus'
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
