import { Component, OnInit } from '@angular/core';
import { Position, InputControlBase } from '../../../../core/models';
import { MessageService } from 'primeng/api';
import { PositionService } from '../../../../core/services';
import { PositionUIService } from '../position-details/position-ui.service';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent implements OnInit {
  listItems: Position[] = [];
  cols: any[] = [];
  title: string;
  model: Position = new Position();
  action: string;
  controls: InputControlBase<any>[] = [];
  displayPositionDetailsForm: boolean;
  constructor(
    private positionService: PositionService,
    private positionUIService: PositionUIService,
    private messageService: MessageService) {
      this.cols = this.positionUIService.getColumns();
      this.controls = this.positionUIService.getMetadata();
      this.title = 'Positions List';
      this.action = 'READ';
    }

  ngOnInit() {
    this.positionService.getAll().subscribe(data => {
      this.listItems = data;
    });
  }
  itemSelectedChangeEvent(selectedItem: Position) {
    this.model = selectedItem;
  }
  itemUpdatedEvent(updatedItem: Position) {

  }
  itemAddedEvent(addedItem: Position) {

  }
  itemDeleteEvent(item: Position) {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }
  listActionMenuClick(event: any) {
    if (event.action === 'CREATE') {
      this.action = event;
      this.model = new Position();
      this.displayPositionDetailsForm = true;
    } else if (event.action === 'READ') {
      this.action = event;
      this.displayPositionDetailsForm = true;
    } else if (event.action === 'UPDATE') {
      this.action = event;
      this.displayPositionDetailsForm = true;
    } else if (event.action === 'DELETE') {
      this.itemDeleteEvent(this.model);
    }
  }
  positionDetailsFormCloseEvent(event: any) {
    console.log('close details form');
    this.displayPositionDetailsForm = false;
  }

}
