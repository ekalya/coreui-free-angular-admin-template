import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { Location } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationUnitTypesService   extends ServiceInterface<Location> {
  resourceURL = '/location/';
  private currentLocation = new BehaviorSubject(new Location());
  selectedLocation = this.currentLocation.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentLocation(c: Location) {
    this.currentLocation.next(c);
  }
}
