import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() public assignedChanges: EventEmitter<Role[]> = new EventEmitter<Role[]>();
  constructor(private userRoleService: UserRoleService) { }

  ngOnInit() {
    this.userRoleService.getAll().subscribe(roles => {
    this.available = roles.filter( r => (this.assigned.filter(ar => ar.id === r.id).length === 0));
    });
  }
  onMoveToTarget(roles: Role[]) {

  }
  onMoveToSource(roles: Role[]) {

  }

}
