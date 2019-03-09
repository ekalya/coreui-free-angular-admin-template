import { Component, OnInit } from '@angular/core';
import { Job, InputControlBase } from '../../../../core/models';
import { JobService } from '../../../../core/services';
import { JobUIService } from '../job-details/job-ui.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
  providers: [MessageService]
})
export class JobsListComponent implements OnInit {
  listItems: Job[] = [];
  cols: any[] = [];
  title: string;
  selectedItem = new Job();
  model: Job;
  controls: InputControlBase<any>[] = [];
  constructor(
    private jobService: JobService,
    private jobUIService: JobUIService,
    private messageService: MessageService) {
      this.cols = this.jobUIService.getColumns();
      this.controls = this.jobUIService.getMetadata();
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
    let listItems = [...this.listItems];
    if (updatedItem.id === undefined) {
      this.jobService.create(updatedItem).subscribe(loc => {
        this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
        this.listItems.push(loc);
      });
    } else {
      this.jobService.update(updatedItem).subscribe(loc => {
        this.messageService.add({severity: 'success', summary: 'Updated successfully', detail: 'Successfully Updated'});
        listItems[this.listItems.indexOf(this.selectedItem)] = loc;
      });
    }
    this.listItems = listItems;
  }
  itemAddedEvent(addedItem: Job) {
    this.jobService.create(addedItem).subscribe(item => {
      this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
      let listItems = [...this.listItems];
      listItems.push(item);
      this.listItems = listItems;
    });
  }
  itemDeleteEvent(item: Job) {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }

}
