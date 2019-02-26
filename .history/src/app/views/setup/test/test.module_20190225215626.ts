import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestPageComponent } from './test-page/test-page.component';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [TestPageComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ]
})
export class TestModule { }
