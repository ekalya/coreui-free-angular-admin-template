import { Injectable } from '@angular/core';
import { Authority } from '../models';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService   extends ServiceInterface<Authority> {
  resourceURL = '/authorities/';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}
