import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
  ],
  providers: [MessageService]
})
export class PrimeNGModule { }
