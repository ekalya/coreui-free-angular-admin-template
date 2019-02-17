import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PickListModule
  ],
  exports: [
    TableModule,
    PickListModule
  ]
})
export class PrimeNGModule { }
