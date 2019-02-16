import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './http/auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  AuthService,
  AlertService,
  ApiService,
  BranchesService,
  MenuService,
  BankService
} from './services';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    AuthService,
    ApiService,
    AlertService,
    BranchesService,
    BankService
    MenuService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
