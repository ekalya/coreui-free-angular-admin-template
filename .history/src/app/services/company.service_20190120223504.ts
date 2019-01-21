import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl: string = '/api/company';
  constructor(private http: HttpClient) { }

  create(company: Company): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, company);
  }
}
