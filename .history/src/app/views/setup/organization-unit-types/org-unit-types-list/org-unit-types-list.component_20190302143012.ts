import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-org-unit-types-list',
  templateUrl: './org-unit-types-list.component.html',
  styleUrls: ['./org-unit-types-list.component.scss']
})
export class OrgUnitTypesListComponent implements OnInit {
  @ViewChild('expandingTree')
  expandingTree: Tree;
  
  constructor() { }

  ngOnInit() {
  }

}
