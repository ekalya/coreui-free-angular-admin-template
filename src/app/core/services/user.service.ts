import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { User } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService  extends ServiceInterface<User> {
  resourceURL = '/userdetails/';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}

