import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CrumAction } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CrumActionsService {
  private subject = new Subject<CrumAction[]>();

  constructor() { }


  sendMenu(actions: CrumAction[]) {
    this.subject.next(actions);
  }

  getMenu(): Observable<CrumAction[]> {
    return this.subject.asObservable();
  }

  clearMenu() {
    this.subject.next();
  }

}
