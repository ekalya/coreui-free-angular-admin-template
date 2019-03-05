import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { OrganizationUnit } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationUnitService   extends ServiceInterface<OrganizationUnit> {
  resourceURL = '/orgunits/';
  private currentOrganizationUnit = new BehaviorSubject(new OrganizationUnit());
  selectedOrganizationUnit = this.currentOrganizationUnit.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentOrganizationUnit(c: OrganizationUnit) {
    this.currentOrganizationUnit.next(c);
  }
}

