import { Component, OnInit, Input } from '@angular/core';
import { Role } from '../../../../core/models';
import { UserRoleService } from '../../../../core';

@Component({
  selector: 'app-user-roles-pick-list',
  templateUrl: './user-roles-pick-list.component.html',
  styleUrls: ['./user-roles-pick-list.component.scss']
})
export class UserRolesPickListComponent implements OnInit {
  available: Role[];
  @Input() public assigned: Role[] = [];

  constructor(private userRoleService: UserRoleService) { }

  ngOnInit() {
    this.userRoleService.getAll().subscribe(roles => {
      this.available = roles;
      this.available.forEach(role => {
        console.log(role.name);
      });
    });
  }
  onMoveToTarget(roles: Role[]) {
  
  }
}
