import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ListItem } from '../../../core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() lList: Subject<Array<ListItem>> = new Subject<Array<ListItem>>();
  constructor() { }

  ngOnInit() {
    this.lList.subscribe(item => {
      console.log(item);
    });
  }

}
