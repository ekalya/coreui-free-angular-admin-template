import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../../core/models';

@Component({
  selector: 'app-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnInit {
  @Input() public users: User[];
  constructor() { }

  ngOnInit() {
  }

}
