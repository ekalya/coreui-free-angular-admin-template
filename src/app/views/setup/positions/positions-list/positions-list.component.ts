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
  selectedItem = new Position();
  model: Position;
  controls: InputControlBase<any>[] = [];
  constructor(
    private positionService: PositionService,
    private positionUIService: PositionUIService,
    private messageService: MessageService) {
      this.cols = this.positionUIService.getColumns();
      this.controls = this.positionUIService.getMetadata();
      this.title = 'Positions List';
    }

  ngOnInit() {
    this.positionService.getAll().subscribe(data => {
      this.listItems = data;
    });
  }
  itemSelectedChangeEvent(selectedItem: Position) {
    this.selectedItem = selectedItem;
  }
  itemUpdatedEvent(updatedItem: Position) {
    let listItems = [...this.listItems];
    if (updatedItem.id === undefined) {
      this.positionService.create(updatedItem).subscribe(loc => {
        this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
        this.listItems.push(loc);
      });
    } else {
      this.positionService.update(updatedItem).subscribe(loc => {
        this.messageService.add({severity: 'success', summary: 'Updated successfully', detail: 'Successfully Updated'});
        listItems[this.listItems.indexOf(this.selectedItem)] = loc;
      });
    }
    this.listItems = listItems;
  }
  itemAddedEvent(addedItem: Position) {
    this.positionService.create(addedItem).subscribe(item => {
      this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
      let listItems = [...this.listItems];
      listItems.push(item);
      this.listItems = listItems;
    });
  }
  itemDeleteEvent(item: Position) {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }

}
