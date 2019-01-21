import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl: string = 'api/company/';
  constructor(private http: HttpClient) { }

  create(c: Company): Observable<Company> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }
}
