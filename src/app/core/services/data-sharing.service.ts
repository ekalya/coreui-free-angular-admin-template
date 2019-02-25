import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private dataSet = new BehaviorSubject(null);
  currentDataSet = this.dataSet.asObservable();

  private actionSet = new BehaviorSubject('READ');
  currentActionSet = this.actionSet.asObservable();

  public data: any;
  constructor() { }
  changeDataSet(data: any) {
    this.dataSet.next(data);
  }
  changeActionSet(data: any) {
    this.actionSet.next(data);
  }
}
