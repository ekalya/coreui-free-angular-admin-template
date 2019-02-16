import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { Bank } from '../models';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService  extends ServiceInterface<Bank> {
  resourceURL = '/banks';
  constructor(apiService: ApiService) {
    super(apiService);
  }
}
