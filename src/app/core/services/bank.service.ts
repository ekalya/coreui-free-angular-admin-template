import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { Bank } from '../models';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService  extends ServiceInterface<Bank> {
  resourceURL = '/banks/';
  private currentBank = new BehaviorSubject(new Bank());
  selectedBank = this.currentBank.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentBank(bank: Bank) {
    this.currentBank.next(bank);
  }
}
