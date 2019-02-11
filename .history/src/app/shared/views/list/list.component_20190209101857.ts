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
  @Input() lList: Subject<Array<ListItem>> = new Subject<Array<ListItem>>();
  
  lListForward: Subject<Array<ListItem>> = new Subject<Array<ListItem>>();
  items: Observable<Array<ListItem>> = this.lList.asObservable();

  @Input() listItems: Array<ListItem> = [];

  @Output() itemListChangeEmitter: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();

  constructor() {

  }

  ngOnInit() {
    this.lList.subscribe(data => {
      this.listItems = data;
      this.lListForward.next(data);
      console.log(data);
    });
  }
  removeItem(item: ListItem) {
    this.listItems  = this.listItems.filter(t => t.description !== item.description);
    this.itemListChangeEmitter.emit(this.listItems);
    this.lList.next(this.listItems);
  }
}
