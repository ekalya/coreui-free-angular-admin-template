import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { Bank } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BankService extends ServiceInterface<Bank> {
  public setResourceURL(): void {
  this.resourceURL = '/banks/';
  }
}
