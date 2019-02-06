import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MenuItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private subject = new Subject<MenuItem[]>();

  constructor() { }


  sendMenu(actions: MenuItem[]) {
    this.subject.next(actions);
  }

  getMenu(): Observable<MenuItem[]> {
    return this.subject.asObservable();
  }

  clearMenu() {
    this.subject.next();
  }

}
