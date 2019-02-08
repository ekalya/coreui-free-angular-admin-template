import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.scss']
})
export class BranchViewComponent implements OnInit {
  branchForm = this.fb.group({
    name: [''],
    physicalLocation: [''],
    telephoneNumber: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
