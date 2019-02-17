import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { Role } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService  extends ServiceInterface<Role> {
  resourceURL = '/userroles/';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}

