import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { Job } from '../models';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobService  extends ServiceInterface<Job> {
  resourceURL = '/jobs/';
  private currentJob = new BehaviorSubject(new Job());
  selectedJob = this.currentJob.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentJob(c: Job) {
    this.currentJob.next(c);
  }
}
