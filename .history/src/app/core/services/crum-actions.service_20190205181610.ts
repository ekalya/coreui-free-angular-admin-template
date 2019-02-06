import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrumActionsService {
  private subject = new Subject<any>();

  constructor() { }

  getMessage(): Observable<CrumAction[]> {
    return this.subject.asObservable();
}
}
