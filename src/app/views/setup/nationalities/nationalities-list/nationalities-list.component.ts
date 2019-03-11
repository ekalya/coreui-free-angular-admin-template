import { Component, OnInit } from '@angular/core';
import { Job, InputControlBase, GenericComponent, Nationality } from '../../../../core/models';
import { JobService, NationalityService } from '../../../../core/services';
import { NationalityDetailsUIService } from '../nationality-details/nationality-details-ui.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nationalities-list',
  templateUrl: './nationalities-list.component.html',
  styleUrls: ['./nationalities-list.component.scss'],
  providers: [MessageService]
})
export class NationalitiesListComponent extends GenericComponent<Nationality> implements OnInit {
  constructor(
    private nationalityService: NationalityService,
    private nationalityDetailsUIService: NationalityDetailsUIService,
    private messageService: MessageService) {
      super(nationalityService, messageService, nationalityDetailsUIService);
      this.title = 'Nationalities List';
    }

  ngOnInit() {
    this.nationalityService.getAll().subscribe(data => {
      this.listItems = data;
    });
  }
  itemSelectedChangeEvent(selectedItem: Nationality) {
    this.selectedItem = selectedItem;
  }
  itemUpdatedEvent(updatedItem: Nationality) {
    this.updateItem(updatedItem);
  }
  itemAddedEvent(addedItem: Nationality) {
    this.addItem(addedItem);
  }
  itemDeleteEvent(item: Nationality) {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }

}
