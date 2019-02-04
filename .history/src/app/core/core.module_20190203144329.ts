import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './http/auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  AuthService,
  AlertService,
  ApiService,
  BranchesService
} from './services';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ArrayToCommaDelimitedPipe } from './pipes/array-to-comma-delimited.pipe';

@NgModule({
  declarations: [
    ArrayToCommaDelimitedPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ArrayToCommaDelimitedPipe],
  providers: [
    AuthService,
    ApiService,
    AlertService,
    BranchesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
