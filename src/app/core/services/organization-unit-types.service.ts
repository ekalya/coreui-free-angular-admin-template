import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { OrganizationUnitType } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationUnitTypesService   extends ServiceInterface<OrganizationUnitType> {
  resourceURL = '/orgunittypes/';
  private currentOrganizationUnitType = new BehaviorSubject(new OrganizationUnitType());
  selectedOrganizationUnitType = this.currentOrganizationUnitType.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentOrganizationUnitType(c: OrganizationUnitType) {
    this.currentOrganizationUnitType.next(c);
  }
}
