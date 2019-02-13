import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Branch } from '../../../../core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() public dtTriger: Subject<boolean> = new Subject<boolean>();
  @Input() public dtOptions: DataTables.Settings = {};
  @Input() public branches: Branch[];
  constructor() { }

  ngOnInit() {
  }

}
