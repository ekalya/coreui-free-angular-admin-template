import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { EmploymentStatus } from '../models';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmploymentStatusService  extends ServiceInterface<EmploymentStatus> {
  resourceURL = '/employmentstatus/';
  private currentEmploymentStatus = new BehaviorSubject(new EmploymentStatus());
  selectedEmploymentStatus = this.currentEmploymentStatus.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentEmployment(c: EmploymentStatus) {
    this.currentEmploymentStatus.next(c);
  }
}
