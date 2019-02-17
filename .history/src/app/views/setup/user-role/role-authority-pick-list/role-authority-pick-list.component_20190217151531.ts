import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Authority } from '../../../../core';

@Component({
  selector: 'app-role-authority-pick-list',
  templateUrl: './role-authority-pick-list.component.html',
  styleUrls: ['./role-authority-pick-list.component.scss']
})
export class RoleAuthorityPickListComponent implements OnInit {
  available: Authority[];
  @Input() public assigned: Authority[] = [];
  @Output() public assignedChanges: EventEmitter<Authority[]> = new EventEmitter<Authority[]>();
  constructor(private userAuthorityService: UserAuthorityService) { }

  ngOnInit() {
    this.userAuthorityService.getAll().subscribe(authorities => {
    this.available = authorities.filter( r => (this.assigned.filter(ar => ar.id === r.id).length === 0));
    });
  }
  onMoveToTarget(authorities: Authority[]) {
    this.assignedChanges.emit(this.assigned);
  }
  onMoveToSource(authorities: Authority[]) {
    this.assignedChanges.emit(this.assigned);
  }
}
