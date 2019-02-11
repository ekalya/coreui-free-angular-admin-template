import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ListItem } from '../../../core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: Observable<Array<ListItem>>;
  @Input() listItems: Array<ListItem> = [];
  @Output() itemListChangeEmitter: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();

  constructor() {

  }

  ngOnInit() {
  }
  removeItem(item: ListItem) {
    this.listItems  = this.listItems.filter(t => t.description !== item.description);
    this.itemListChangeEmitter.emit(this.listItems);
  }
}
