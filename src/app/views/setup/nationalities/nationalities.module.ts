import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationalitiesRoutingModule } from './nationalities-routing.module';
import { NationalitiesListComponent } from './nationalities-list/nationalities-list.component';
import { NationalityDetailsComponent } from './nationality-details/nationality-details.component';
import { SharedModule } from '../../../shared';
@NgModule({
  declarations: [NationalitiesListComponent, NationalityDetailsComponent],
  imports: [
    CommonModule,
    NationalitiesRoutingModule,
    SharedModule
  ]
})
export class NationalitiesModule { }
