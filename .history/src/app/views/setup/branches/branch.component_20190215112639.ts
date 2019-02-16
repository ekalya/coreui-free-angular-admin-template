import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ListItem, Branch, TillNumber } from '../../../core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  branch: Branch = new Branch();
  tillNumbers: Array<TillNumber> = [];
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(formGroup: FormGroup) {
    console.log(formGroup.value);
    this.branch.name = formGroup.value.name;
    this.branch.physicalLocation = formGroup.value.physicalLocation;
    this.branch.telephone = formGroup.value.telephone;
    this.branch.tillNumbers = this.tillNumbers;
    console.log( JSON.stringify(this.branch));
  }
  listItemsEmitter(listItems: Array<ListItem>) {
    console.log('branch::');
    this.tillNumbers = [];
    listItems.forEach(item => {
      console.log(item.description);
      this.tillNumbers.push(new TillNumber(Number(item.description)));
    });
  }

}
