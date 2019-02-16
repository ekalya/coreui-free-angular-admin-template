import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import { Branch, MenuItem } from '../../../../core/models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  @Input() public branches: Branch[];
  @Input() public dtOptions: DataTables.Settings;
  @Input() public dtTrigger: Subject<boolean>;

  constructor() { }
  ngOnInit() {
  }
}
