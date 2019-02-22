import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestPageComponent } from './test-page/test-page.component';

@NgModule({
  declarations: [TestPageComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
