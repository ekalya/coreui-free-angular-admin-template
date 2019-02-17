import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../../../core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[];
  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.usersService.getAll().subscribe(users => {
      this.users = users;
      this.users.forEach(u => {
        console.log(u.username);
      });
    });
  }

}
