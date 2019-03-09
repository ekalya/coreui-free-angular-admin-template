import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { Position } from '../models';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PositionService  extends ServiceInterface<Position> {
  resourceURL = '/positions/';
  private currentPosition = new BehaviorSubject(new Position());
  selectedPosition = this.currentPosition.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentPosition(c: Position) {
    this.currentPosition.next(c);
  }
}

