import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import thunk from 'redux-thunk';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgReduxModule
  ],
  exports: [NgReduxModule]
})
export class StoreModule { }
