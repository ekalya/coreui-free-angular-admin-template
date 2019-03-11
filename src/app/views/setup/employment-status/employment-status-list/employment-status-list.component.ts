import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmploymentStatus, InputControlBase, GenericComponent } from '../../../../core/models';
import { EmploymentStatusService } from '../../../../core/services';
import { EmploymentStatusUIService } from '../employment-status-details/employment-status-ui.service';

@Component({
  selector: 'app-employment-status-list',
  templateUrl: './employment-status-list.component.html',
  styleUrls: ['./employment-status-list.component.scss'],
  providers: [MessageService]
})
export class EmploymentStatusListComponent extends GenericComponent<EmploymentStatus> implements OnInit {
  constructor(
    private employmentStatusService: EmploymentStatusService,
    private employmentStatusUIService: EmploymentStatusUIService,
    private messageService: MessageService) {
      super(employmentStatusService, messageService, employmentStatusUIService);
      this.title = 'EmploymentStatuss List';
    }

  ngOnInit() {
    this.employmentStatusService.getAll().subscribe(data => {
      this.listItems = data;
    });
  }
  itemSelectedChangeEvent(selectedItem: EmploymentStatus) {
    this.selectedItem = selectedItem;
  }
  itemUpdatedEvent(updatedItem: EmploymentStatus) {
    this.updateItem(updatedItem);
  }
  itemAddedEvent(addedItem: EmploymentStatus) {
    this.addItem(addedItem);
  }
  itemDeleteEvent(item: EmploymentStatus) {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }

}

