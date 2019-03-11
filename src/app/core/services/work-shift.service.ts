import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { EmploymentStatus, WorkShift } from '../models';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkShiftService  extends ServiceInterface<WorkShift> {
  resourceURL = '/workshifts/';
  private currentWorkShift = new BehaviorSubject(new WorkShift());
  selectedWorkShift = this.currentWorkShift.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentWorkShift(c: WorkShift) {
    this.currentWorkShift.next(c);
  }
}
