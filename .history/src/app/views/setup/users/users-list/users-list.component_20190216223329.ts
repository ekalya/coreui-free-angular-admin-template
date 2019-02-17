import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../../../core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[];
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  selectedUser: User;
  constructor(private router: Router, private usersService: UserService) { }

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
    if (action === 'CREATE') {
      this.router.navigate(['/setup/branch'], {queryParams: {branch: JSON.stringify(new Branch()), mode: action}});
    } else if (action === 'EDIT') {
      this.router.navigate(['/setup/branch'], {queryParams: {branch: JSON.stringify(this.selectedBranch), mode: action}});
    } else if (action === 'DETAILS') {
      this.router.navigate(['/setup/branch'], {queryParams: {branch: JSON.stringify(this.selectedBranch), mode: action}});
    }
  }
  selectedUserChange(user: User) {
    this.selectedUser = user;
    console.log(this.selectedUser.username);
  }

}
