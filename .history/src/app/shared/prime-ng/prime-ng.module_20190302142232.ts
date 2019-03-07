import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService, TreeNode } from 'primeng/api';
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
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import { DialogModule, ToggleButtonModule , CheckboxModule, TriStateCheckboxModule, TreeModule} from 'primeng/primeng';

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
    PanelModule,
    SplitButtonModule,
    MenuModule,
    ToastModule,
    DynamicDialogModule,
    ButtonModule,
    ContextMenuModule,
    DialogModule,
    ToggleButtonModule,
    CheckboxModule,
    TriStateCheckboxModule,
    TreeModule,
    TreeNode

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
    DynamicDialogModule,
    ButtonModule,
    ContextMenuModule,
    DialogModule,
    ToggleButtonModule,
    CheckboxModule,
    TriStateCheckboxModule,
    TreeModule,
    TreeNode
  ],
  providers: [MessageService]
})
export class PrimeNGModule { }
