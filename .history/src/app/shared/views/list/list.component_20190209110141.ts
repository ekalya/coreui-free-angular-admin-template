import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { ListItem } from '../../../core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: BehaviorSubject<Array<ListItem>> = new BehaviorSubject<Array<ListItem>>([]);
  @Input() listItemsReceiver: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();
  @Output() removeItemEmitter: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  constructor() {

  }

  ngOnInit() {
    this.listItemsReceiver.subscribe(data => {
       this.items.next(data);
    });
  }
  removeItem(item: ListItem) {
    this.removeItemEmitter.emit(item);
  }
}
