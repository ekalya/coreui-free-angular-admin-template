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
  @Output() removeItemEmitter: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  constructor() {

  }

  ngOnInit() {
  }
  removeItem(item: ListItem) {
    this.removeItemEmitter.emit(item);
  }
}
