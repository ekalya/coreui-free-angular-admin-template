import { Component, OnInit, ViewChild } from '@angular/core';
import {TreeNode, MessageService, MenuItem} from 'primeng/api';
import { NodeService } from '../../../../core/services';

@Component({
  selector: 'app-org-unit-types-list',
  templateUrl: './org-unit-types-list.component.html',
  styleUrls: ['./org-unit-types-list.component.scss']
})
export class OrgUnitTypesListComponent implements OnInit {

  filesTree2: TreeNode[];

  selectedFile: TreeNode;

  filesTree6: TreeNode[];
  items: MenuItem[];
  selectedFile2: TreeNode;

  constructor(private nodeService: NodeService, private messageService: MessageService) { }

  ngOnInit() {
    this.nodeService.getFiles().then(files => this.filesTree2 = files);
    this.nodeService.getFiles().then(files => this.filesTree6 = files);
  }

  nodeSelect(event) {
    this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
}

nodeUnselect(event) {
    this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
}

nodeExpandMessage(event) {
    this.messageService.add({severity: 'info', summary: 'Node Expanded', detail: event.node.label});
}

viewFile(file: TreeNode) {
    this.messageService.add({severity: 'info', summary: 'Node Selected with Right Click', detail: file.label});
}

private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    }
}

}
