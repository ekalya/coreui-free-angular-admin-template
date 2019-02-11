import { Component, OnInit } from '@angular/core';
import { Company, CompanyService, TillnumberMetadataService } from '../../../core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  form: FormGroup;
  tillnumberFormMetadata: any[];
  companies: Company[] = [];
  constructor(private companyService: CompanyService, tillnumberMetadataService: TillnumberMetadataService) {
    this.tillnumberFormMetadata = tillnumberMetadataService.getMetadata();
  }

  ngOnInit() {
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
    if (action === 'SUBMIT') {
    }
  }

  formValues(form: FormGroup) {
    this.form = form;
  }
  editCompany(c: Company): void {}
  addCompany(): void {}

}
