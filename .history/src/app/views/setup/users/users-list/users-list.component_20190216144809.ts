import { Component, OnInit } from '@angular/core';
import { User } from '../../../../core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[];
  constructor(private usersService: UserService) { }

  ngOnInit() {

  }

}
