import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsRoutingModule } from './positions-routing.module';
import { PositionsListComponent } from './positions-list/positions-list.component';
import { PositionDetailsComponent } from './position-details/position-details.component';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [PositionsListComponent, PositionDetailsComponent],
  imports: [
    CommonModule,
    PositionsRoutingModule,
    SharedModule
  ]
})
export class PositionsModule { }
