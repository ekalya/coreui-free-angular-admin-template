import { Component, OnInit } from '@angular/core';
import { Role, UserRoleService } from '../../../../core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-role-list',
  templateUrl: './user-role-list.component.html',
  styleUrls: ['./user-role-list.component.scss'],
  providers: [MessageService]
})
export class UserRoleListComponent implements OnInit {
  roles: Role[];
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  selectedRole: Role = new Role();
  constructor(private router: Router, private userRoleService: UserRoleService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.userRoleService.getAll().subscribe(roles => {
      this.roles = roles;
      this.dtTrigger.next(true);
    });
  }
  actionMenuClick(action: string) {
    if (action === 'CREATE') {
      this.router.navigate(['/setup/user-role/userroledetails'], {queryParams: {role: JSON.stringify(new Role()), mode: action}});
    } else if (action === 'EDIT') {
      this.router.navigate(['/setup/user-role/userroledetails'], {queryParams: {role: JSON.stringify(this.selectedRole), mode: action}});
    } else if (action === 'DETAILS') {
      if (!this.selectedRole) {
        this.messageService.add({severity: 'error', summary: 'No selected record', detail: 'No selected record'});
      }
      this.router.navigate(['/setup/user-role/userroledetails'], {queryParams: {role: JSON.stringify(this.selectedRole), mode: action}});
    }
  }
  selectedRoleChange(role: Role) {
    this.selectedRole = role;
  }

}
