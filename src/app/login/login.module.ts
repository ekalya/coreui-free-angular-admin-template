import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './login-container.component';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CommonModule,
    LoginContainerComponent,
  ]
})
export class LoginModule { }
