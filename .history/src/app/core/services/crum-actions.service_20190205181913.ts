import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CrumAction } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CrumActionsService {
  private subject = new Subject<CrumAction[]>();

  constructor() { }

  getActions(): Observable<CrumAction[]> {
    return this.subject.asObservable();
  }

  clearActions() {
    this.subject.next();
  }

}
