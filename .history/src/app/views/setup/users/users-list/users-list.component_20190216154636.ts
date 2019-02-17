import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../../../core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[];
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.usersService.getAll().subscribe(users => {
      this.users = users;
      this.dtTrigger.next(true);
    });
  }
  actionMenuClick(action: string) {
    /** action = "CREATE OR DETAILS, EDIT or DELETE" */
    console.log(action);
  }

}
