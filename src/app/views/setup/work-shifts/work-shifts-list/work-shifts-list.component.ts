import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GenericComponent, WorkShift } from '../../../../core/models';
import { WorkShiftService } from '../../../../core/services';
import { WorkShiftUIService } from '../work-shift-details/work-shift-ui.service';

@Component({
  selector: 'app-work-shifts-list',
  templateUrl: './work-shifts-list.component.html',
  styleUrls: ['./work-shifts-list.component.scss'],
  providers: [MessageService]
})
export class WorkShiftsListComponent extends GenericComponent<WorkShift> implements OnInit {
  constructor(
    private workShiftService: WorkShiftService,
    workShiftUIService: WorkShiftUIService,
    private messageService: MessageService) {
      super(workShiftService, messageService, workShiftUIService);
      this.title = 'Work Shifts List';
    }

  ngOnInit() {
    this.workShiftService.getAll().subscribe(data => {
      this.listItems = data;
    });
  }
  itemSelectedChangeEvent(selectedItem: WorkShift) {
    this.selectedItem = selectedItem;
  }
  itemUpdatedEvent(updatedItem: WorkShift) {
    this.updateItem(updatedItem);
  }
  itemAddedEvent(addedItem: WorkShift) {
    this.addItem(addedItem);
  }
  itemDeleteEvent() {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }

}

