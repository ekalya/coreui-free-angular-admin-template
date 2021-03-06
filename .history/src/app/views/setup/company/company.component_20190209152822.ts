import { Component, OnInit } from '@angular/core';
import { Company, CompanyService } from '../../../core';
import { FormGroup } from '@angular/forms';

import { CompanyUIService } from './company-ui.service';

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
  constructor(private companyService: CompanyService, private companyMetadataService: CompanyUIService) {
  }

  ngOnInit() {
    this.companyFormMetadata = this.companyMetadataService.getMetadata(this.model);
    console.log(this.companyFormMetadata);

    this.companyService.getAll().subscribe(data => {
      this.companies = data;
    });
    this.model.name = 'name set on init';
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
