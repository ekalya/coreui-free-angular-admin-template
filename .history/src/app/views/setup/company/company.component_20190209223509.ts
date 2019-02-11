import { Component, OnInit, EventEmitter } from '@angular/core';
import { Company, CompanyService } from '../../../core';
import { FormGroup } from '@angular/forms';

import { CompanyUIService } from './company-ui.service';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  formIsValid: Boolean = false;
  formIsDirty: Boolean = false;
  form: FormGroup;
  companyFormMetadata: any[];
  companies: Company[] = [];
  model: Company = new Company();
  modelEmitter: EventEmitter<Company> = new EventEmitter<Company>();

  constructor(private companyService: CompanyService, private companyMetadataService: CompanyUIService) {
  }

  ngOnInit() {
    this.model.name = 'Test company name';
    this.companyFormMetadata = this.companyMetadataService.getMetadata();
    console.log(this.companyFormMetadata);
    this.modelEmitter.emit(this.model);
    this.companyService.getAll().subscribe(data => {
      this.companies = data;
    });
  }
  deleteCompany(c: Company) {
    this.companyService.delete(c.id)
    .subscribe( data => {
      this.companies = this.companies.filter(c => c.id !== c.id);
    });
  }
  actionMenuClick(action: string) {
    console.log(action);
    this.model.name = 'new name';
    if (action === 'SUBMIT') {
    }
  }

  formValues(form: FormGroup) {
    this.form = form;
    this.formIsDirty = form.dirty;
    this.formIsValid = form.valid;
    console.log(form.value);
    this.model.name = 'new name';
  }
  editCompany(c: Company): void {}
  addCompany(): void {}

}
