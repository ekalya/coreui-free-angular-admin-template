import { Injectable } from '@angular/core';
import { Authority } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService   extends ServiceInterface<Authority> {
  resourceURL = '/authorities/';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}
