import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../core';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnInit {
  @Input() public users: User[];
  @Output() public selectedUserEmitter: EventEmitter<User> = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
  selectRow(index: number, user: User) {
    this.selectedUserEmitter.emit(user);
  }

}
