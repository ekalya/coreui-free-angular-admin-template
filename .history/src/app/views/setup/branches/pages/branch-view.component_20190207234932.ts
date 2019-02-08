import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.scss']
})
export class BranchViewComponent implements OnInit {
  @Output() public OnSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  branchForm = this.fb.group({
    name: ['', Validators.required],
    physicalLocation: ['', Validators.required],
    telephoneNumber: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {

  }
  actionMenuClick(action: string) {
    console.log(action);
    if (action === 'SUBMIT') {
      
    }
  }

}
