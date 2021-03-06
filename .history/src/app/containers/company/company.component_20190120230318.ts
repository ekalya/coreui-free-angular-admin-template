import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];
  constructor(private companyService: CompanyService) { }
  
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
  editCompany(c: Company): void {}
  addCompany(): void {}

}
