import { Component, OnInit, EventEmitter } from '@angular/core';
import { Company, CompanyService } from '../../../core';
import { FormGroup } from '@angular/forms';

import { CompanyUIService } from './company-ui.service';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  formIsValid: Boolean = false;
  formIsDirty: Boolean = false;
  companyFormMetadata: any[];
  companies: Company[] = [];
  model: Company = new Company();
  modelEmitter: EventEmitter<Company> = new EventEmitter<Company>();

  constructor(private companyService: CompanyService, private companyMetadataService: CompanyUIService) {
  }


  ngOnInit() {
    this.companyFormMetadata = this.companyMetadataService.getMetadata();
    console.log(this.companyFormMetadata);
    this.companyService.getAll().subscribe((cData: Company[]) => {
      console.log('Company data:' + cData);
      console.log(cData.length);
      if (cData.length !== 0) {
        this.model = cData[0];
      }
      this.modelEmitter.emit(this.model);
      console.log(this.model);
    });
  }

  formValues(form: FormGroup) {
    this.formIsDirty = form.dirty;
    this.formIsValid = form.valid;
    console.log(form.value);
    console.log(JSON.stringify(form.value));
    this.model = plainToClass(Company, JSON.stringify(form.value));
    console.log(JSON.stringify(this.model));
    this.companyService.update(this.model).subscribe( data => {
    console.log('company saved....' + data);
    });
  }

}
