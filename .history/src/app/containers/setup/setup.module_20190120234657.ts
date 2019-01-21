import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { SetupRoutingModule } from './setup-routing.module';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    SetupRoutingModule
  ]
})
export class SetupModule { }
