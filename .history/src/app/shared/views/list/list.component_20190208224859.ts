import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ListItem } from '../../../core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  lList: Subject<Array<ListItem>> = new Subject<Array<ListItem>>();
  constructor() { }

  ngOnInit() {
  }
  clearList() {
    this.lList.next([]);
  }

}
