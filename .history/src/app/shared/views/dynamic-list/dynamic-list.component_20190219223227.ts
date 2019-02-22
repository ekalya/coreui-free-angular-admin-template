import { Component, OnInit, Input } from '@angular/core';
import { TableColumn } from '../../../core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent implements OnInit {
  @Input() public list: any[];
  @Input() public cols: TableColumn[];
  @Input() public dtTrigger: Subject<boolean> = new Subject<boolean>();
  @Input() public dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit() {
  }

}
