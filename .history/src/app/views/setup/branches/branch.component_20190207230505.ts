import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  inputForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  actionMenuClick(action: string) {
    console.log(action);
    if (action === 'SAVE') {
    }
  }
  formGroupHandler(frm: FormGroup) {
  this.inputForm = frm;
  }

}
