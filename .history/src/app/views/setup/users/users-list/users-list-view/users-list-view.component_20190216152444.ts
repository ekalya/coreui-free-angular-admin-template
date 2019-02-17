import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnInit {
  @Input() public users: User[];
  @Input() public dtTrigger: Subject<boolean> = new Subject<boolean>();
  @Input() public dtOptions: DataTables.Settings = {};
  selectedRow: number;
  @Output() public selectedUserEmitter: EventEmitter<User> = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
  selectRow(index: number, user: User) {
    this.selectRow = index;
    this.selectedUserEmitter.emit(user);
  }

}
