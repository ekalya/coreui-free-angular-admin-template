import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService  extends ServiceInterface<Role> {
  resourceURL = '/userroles/';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}
