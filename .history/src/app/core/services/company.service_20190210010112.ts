import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  resource = '/company/';
  constructor(private apiService: ApiService) { }

  create(company: Company): Observable<Company> {
    return this.apiService.put<Company>(this.resource, company);
  }
  getAll(): Observable<Company[]> {
    return this.apiService.get<Company[]>(this.resource);
  }
  getById(id: number): Observable<Company> {
    return this.apiService.get<Company>(this.resource + id);
  }
  update(company: Company): Observable<Company> {
    return this.apiService.post<Company>(this.resource, company);
  }
  delete(id: number): Observable<Company> {
    return this.apiService.delete<Company>(this.resource + id);
  }
}
