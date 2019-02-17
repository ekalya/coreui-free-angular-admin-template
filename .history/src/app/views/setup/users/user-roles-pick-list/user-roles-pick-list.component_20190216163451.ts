import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-roles-pick-list',
  templateUrl: './user-roles-pick-list.component.html',
  styleUrls: ['./user-roles-pick-list.component.scss']
})
export class UserRolesPickListComponent implements OnInit {
  available: UserRole[];
  listpicked2: UserRole[];
  
  constructor() { }

  ngOnInit() {
  }

}
