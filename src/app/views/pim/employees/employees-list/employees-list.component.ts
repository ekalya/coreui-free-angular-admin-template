import { Component, OnInit } from '@angular/core';
import { Job, InputControlBase, GenericComponent } from '../../../../core/models';
import { EmployeeService } from '../../../../core/services';
import { Employee } from '../../../../core/models';
import { MessageService } from 'primeng/api';
import { EmployeeUIService } from '../employee-details/employee-ui.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  providers: [MessageService]
})
export class EmployeesListComponent extends GenericComponent<Employee> implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private employeeUIService: EmployeeUIService,
    private messageService: MessageService) {
      super(employeeService, messageService, employeeUIService);
      this.title = 'Employees List';
    }

  ngOnInit() {
    this.employeeService.getAll().subscribe(data => {
      this.listItems = data;
    });
  }
  itemSelectedChangeEvent(selectedItem: Employee) {
    this.selectedItem = selectedItem;
  }
  itemUpdatedEvent(updatedItem: Employee) {
    this.updateItem(updatedItem);
  }
  itemAddedEvent(addedItem: Employee) {
    this.addItem(addedItem);
  }
  itemDeleteEvent(item: Employee) {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }

}

