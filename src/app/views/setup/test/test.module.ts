import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestPageComponent } from './test-page/test-page.component';
import { SharedModule } from '../../../shared';
import { TestDynamicPlusComponent } from './test-dynamic-plus/test-dynamic-plus.component';

@NgModule({
  declarations: [TestPageComponent, TestDynamicPlusComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ]
})
export class TestModule { }
