import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent implements OnInit {
  @Input() public list: any[];
  cols: any[];
  constructor() { }

  ngOnInit() {
  }

}
