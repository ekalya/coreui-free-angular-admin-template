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
export class BranchListComponent implements OnInit, AfterViewInit {
  @Input() public branches: Branch[];
  @Input() public dtOptions: DataTables.Settings;
  @Input() public dtTrigger: Subject<boolean>;
  public tableWidget: any;

  items = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor() { }
  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.initDatatable();
  }

  private initDatatable(): void {
    let exampleId: any = $('#example');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }

}
