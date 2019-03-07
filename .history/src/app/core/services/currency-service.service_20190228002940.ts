import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { User } from '../models';
import { ApiService } from './api.service';
import { Currency } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService  extends ServiceInterface<Currency> {
  resourceURL = '/userroles/';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}
