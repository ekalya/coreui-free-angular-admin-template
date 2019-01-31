import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { SetupRoutingModule } from './setup-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule
  ],
  declarations: [CompanyComponent]
})
export class SetupModule { }
