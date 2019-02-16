import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ListItem } from '../../../core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(formGroup: FormGroup) {
    console.log(formGroup.value);
  }
  listItemsEmitter(listItems: Array<ListItem>) {
    console.log('branch::');
    listItems.forEach(item => {
      console.log(item.description);
    });
  }

}
