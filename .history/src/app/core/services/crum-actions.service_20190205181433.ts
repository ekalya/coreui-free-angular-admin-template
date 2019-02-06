import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrumActionsService {
  private subject = new Subject<any>();

  constructor() { }
}
