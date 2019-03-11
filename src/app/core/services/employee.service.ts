import { Injectable } from '@angular/core';
import { ServiceInterface } from './service-interface.interface';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService  extends ServiceInterface<Employee> {
  resourceURL = '/employees/';
  private currentEmployee = new BehaviorSubject(new Employee());
  selectedEmployee = this.currentEmployee.asObservable();
  constructor(apiService: ApiService) {
    super(apiService);
  }
  changeCurrentEmployee(c: Employee) {
    this.currentEmployee.next(c);
  }
}

