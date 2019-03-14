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
import { AuthExpiredInterceptor, ErrorHandlerInterceptor } from './http';

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
    BankService,
    MenuService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthExpiredInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlerInterceptor,
        multi: true
    }
  ]
})
export class CoreModule { }
