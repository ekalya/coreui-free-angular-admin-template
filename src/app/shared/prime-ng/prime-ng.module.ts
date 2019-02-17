import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PickListModule,
    ButtonModule
  ],
  exports: [
    TableModule,
    PickListModule,
    ButtonModule
  ]
})
export class PrimeNGModule { }
