import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Branch } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  resource = '/branches';
  constructor(private apiService: ApiService) { }

  create(branch: Branch): Observable<Branch> {
    return this.apiService.put<Branch>(this.resource, branch);
  }
  getAll(): Observable<Branch[]> {
    return this.apiService.get<Branch[]>(this.resource);
  }
  getById(id: number): Observable<Branch> {
    return this.apiService.get<Branch>(this.resource + id);
  }
  update(branch: Branch): Observable<Branch> {
    return this.apiService.post<Branch>(this.resource, branch);
  }
  delete(id: number): Observable<Branch> {
    return this.apiService.delete<Branch>(this.resource + id);
  }
}

