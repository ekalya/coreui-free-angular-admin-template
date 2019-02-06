import { Component, OnInit } from '@angular/core';
import { Company, CompanyService, MenuService, MenuItem } from '../../../core';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];
  constructor(private companyService: CompanyService,
    private menuService: MenuService) {
      this.setMenu();
  }

  ngOnInit() {
    this.companyService.getAll().subscribe(data => {
      this.companies = data;
    });
  }
  setMenu() {
    this.menuService.sendMenu([
      new MenuItem('Company Create', '#'),
      new MenuItem('Details', '#'),
      new MenuItem('Edit', '#'),
      new MenuItem('Delete', '#')]);
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
