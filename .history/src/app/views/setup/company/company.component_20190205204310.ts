import { Component, OnInit } from '@angular/core';
import { Company, CompanyService, CrumAction } from '../../../core';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  public crumActions: Observable<CrumAction[]>;
  public subject = new Subject<CrumAction[]>();
  
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
