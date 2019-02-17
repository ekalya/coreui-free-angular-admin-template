import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PickListModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    TableModule,
    PickListModule,
    ButtonModule,
    ToastModule
  ]
})
export class PrimeNGModule { }
