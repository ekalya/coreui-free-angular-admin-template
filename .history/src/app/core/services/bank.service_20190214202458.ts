import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { Bank } from '../models';
import { ApiService } from '.';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  resource = '/banks/';
  constructor(private apiService: ApiService) { }

  create(bank: Bank): Observable<Bank> {
    return this.apiService.post<Bank>(this.resource, bank);
  }
  getAll(): Observable<Bank[]> {
    return this.apiService.get<Bank[]>(this.resource);
  }
  getById(id: number): Observable<Bank> {
    return this.apiService.get<Bank>(this.resource + id);
  }
  update(bank: Bank): Observable<Bank> {
    return this.apiService.put<Bank>(this.resource, bank);
  }
  delete(id: number): Observable<Bank> {
    return this.apiService.delete<Bank>(this.resource + id);
  }
}
