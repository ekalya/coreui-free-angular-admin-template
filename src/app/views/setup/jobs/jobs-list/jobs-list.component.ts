import { Component, OnInit } from '@angular/core';
import { Job, InputControlBase, GenericComponent } from '../../../../core/models';
import { JobService } from '../../../../core/services';
import { JobUIService } from '../job-details/job-ui.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
  providers: [MessageService]
})
export class JobsListComponent extends GenericComponent<Job> implements OnInit {
  constructor(
    private jobService: JobService,
    private jobUIService: JobUIService,
    private messageService: MessageService) {
      super(jobService, messageService, jobUIService);
      this.title = 'Jobs List';
    }

  ngOnInit() {
    this.jobService.getAll().subscribe(data => {
      this.listItems = data;
    });
  }
  itemSelectedChangeEvent(selectedItem: Job) {
    this.selectedItem = selectedItem;
  }
  itemUpdatedEvent(updatedItem: Job) {
    this.updateItem(updatedItem);
  }
  itemAddedEvent(addedItem: Job) {
    this.addItem(addedItem);
  }
  itemDeleteEvent(item: Job) {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }

}
