import { Component, OnInit, ViewChild } from '@angular/core';
import {TreeNode, MessageService} from 'primeng/api';
import { Tree } from 'primeng/primeng';

@Component({
  selector: 'app-org-unit-types-list',
  templateUrl: './org-unit-types-list.component.html',
  styleUrls: ['./org-unit-types-list.component.scss']
})
export class OrgUnitTypesListComponent implements OnInit {
  @ViewChild('expandingTree')
  expandingTree: Tree;

  filesTree2: TreeNode[];

  selectedFile: TreeNode;

  constructor(private nodeService: NodeService, private messageService: MessageService) { }

  ngOnInit() {
  }

}
