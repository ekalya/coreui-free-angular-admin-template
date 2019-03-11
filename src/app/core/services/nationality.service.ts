import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Nationality } from '../models';
@Injectable({
  providedIn: 'root'
})
export class NationalityService  extends ServiceInterface<Nationality> {
  resourceURL = '/nationalities/';
  private currentNationality = new BehaviorSubject(new Nationality());
  selectedNationality = this.currentNationality.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentNationality(c: Nationality) {
    this.currentNationality.next(c);
  }
}
