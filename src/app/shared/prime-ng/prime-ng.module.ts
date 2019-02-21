import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {ListboxModule} from 'primeng/listbox';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    PickListModule,
    ButtonModule,
    ToastModule,
    PasswordModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule,
    MultiSelectModule,
    ListboxModule,
    PickListModule,
    CardModule,
    PanelModule,
    SplitButtonModule,
    MenuModule,
  ],
  exports: [
    TableModule,
    PickListModule,
    ButtonModule,
    ToastModule,
    PasswordModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule,
    MultiSelectModule,
    ListboxModule,
    CardModule,
    PanelModule,
    SplitButtonModule,
    MenuModule,
  ],
  providers: [MessageService]
})
export class PrimeNGModule { }
