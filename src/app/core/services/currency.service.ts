import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { Currency } from '../models';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends ServiceInterface<Currency> {
  resourceURL = '/currency/';
  private currentCurrency = new BehaviorSubject(new Currency());
  selectedCurrency = this.currentCurrency.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentCurrency(c: Currency) {
    this.currentCurrency.next(c);
  }
}
