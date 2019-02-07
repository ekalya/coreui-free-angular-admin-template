import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgReduxModule
  ],
  exports: [NgReduxModule]
})
export class StoreModule {
  constructor(ngRedux: NgRedux<any>, private devTools: DevToolsExtension) {
    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }
    ngRedux.configureStore(rootReducer, {}, [ thunk ], enhancers);
  }
 }
