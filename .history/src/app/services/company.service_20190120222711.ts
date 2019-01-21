import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  create(c: Company): Observable<Company> {

  }
}
