import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { Job, PayGrade } from '../models';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PayGradeService  extends ServiceInterface<PayGrade> {
  resourceURL = '/paygrades/';
  private currentPayGrade = new BehaviorSubject(new PayGrade());
  selectedPayGrade = this.currentPayGrade.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentPayGrade(c: PayGrade) {
    this.currentPayGrade.next(c);
  }
}
