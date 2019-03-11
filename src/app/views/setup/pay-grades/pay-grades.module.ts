import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayGradesRoutingModule } from './pay-grades-routing.module';
import { PayGradesListComponent } from './pay-grades-list/pay-grades-list.component';
import { PayGradeDetailComponent } from './pay-grade-detail/pay-grade-detail.component';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [PayGradesListComponent, PayGradeDetailComponent],
  imports: [
    CommonModule,
    PayGradesRoutingModule,
    SharedModule
  ]
})
export class PayGradesModule { }
