import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent implements OnInit {
  list: any[];
  cols: any[];
  constructor() { }

  ngOnInit() {
  }

}
