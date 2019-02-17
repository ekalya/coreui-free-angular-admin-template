import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService  extends ServiceInterface<Bank> {
  resourceURL = '/banks/';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}

