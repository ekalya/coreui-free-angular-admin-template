import { Component, OnInit } from '@angular/core';
import { Company, CompanyService, CrumAction, CrumActionsService } from '../../../core';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  public crumActions: Observable<CrumAction[]>;
  public subject = new Subject<CrumAction[]>();
  public crumActions2: CrumAction[] = [
    new CrumAction('Create', '#'),
    new CrumAction('Details', '#'),
    new CrumAction('Edit', '#'),
    new CrumAction('Delete', '#')];

  companies: Company[] = [];
  constructor(private companyService: CompanyService,
    private crumActionService: CrumActionsService) {
      this.crumActions = this.subject.asObservable();
      this.crumActionService.getActions().subscribe(data  => {
       this.subject.next(data);
      });
  }

  ngOnInit() {
    this.companyService.getAll().subscribe(data => {
      this.companies = data;
    });
  }
  addData() {
    this.crumActionService.sendActions([
      new CrumAction('Create', '#'),
      new CrumAction('Details', '#'),
      new CrumAction('Edit', '#'),
      new CrumAction('Delete', '#')]);
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
