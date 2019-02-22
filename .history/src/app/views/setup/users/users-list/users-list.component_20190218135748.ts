import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../../../core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [MessageService]
})
export class UsersListComponent implements OnInit {
  users: User[];
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  selectedUser: User = new User();
  constructor(private router: Router, private usersService: UserService,
    private messageService: MessageService) { }

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
      this.router.navigate(['/setup/users/userdetails'], {queryParams: {user: JSON.stringify(new User()), mode: action}});
    } else if (action === 'EDIT') {
      this.router.navigate(['/setup/users/userdetails'], {queryParams: {user: JSON.stringify(this.selectedUser), mode: action}});
    } else if (action === 'DETAILS') {
      if (this.selectedUser.username === undefined || this.selectedUser.username === null) {
        this.messageService.add({severity: 'error', summary: 'No selected record', detail: 'No selected record'});
        return;
      }
      this.router.navigate(['/setup/users/userdetails'], {queryParams: {user: JSON.stringify(this.selectedUser), mode: action}});
    }
  }
  selectedUserChange(user: User) {
    this.selectedUser = user;
    console.log(this.selectedUser.username);
  }

}
