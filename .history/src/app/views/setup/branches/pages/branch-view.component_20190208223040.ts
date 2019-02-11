import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TemporaryQuestionsService } from '../../../../core/services/temporary-questions.service';
import { TillnumberMetadataService } from '../../../../core';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.scss']
})
export class BranchViewComponent implements OnInit {
  tillnumberFormMetadata: any[];
  @Output() public OnSubmitEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  branchForm = this.fb.group({
    name: ['', Validators.required],
    physicalLocation: ['', Validators.required],
    telephoneNumber: ['']
  });
  constructor(private fb: FormBuilder, tillnumberMetadataService: TillnumberMetadataService) {
    this.tillnumberFormMetadata = tillnumberMetadataService.getMetadata();
    console.log(this.tillnumberFormMetadata);
   }

  ngOnInit() {
  }

  actionMenuClick(action: string) {
    console.log(action);
    if (action === 'SUBMIT') {
      this.OnSubmitEvent.emit(this.branchForm);
    }
  }

}
