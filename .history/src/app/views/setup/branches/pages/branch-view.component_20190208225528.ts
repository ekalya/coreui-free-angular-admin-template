import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TillnumberMetadataService, ListItem } from '../../../../core';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.scss']
})
export class BranchViewComponent implements OnInit {
  tillnumberFormMetadata: any[];
  @Output() public OnSubmitEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  listItemsEmitter: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();
  listItems: Array<ListItem> = [];

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
  formValues(formValues: FormGroup) {
   let listItem: ListItem = new ListItem(formValues.value.id, formValues.value['tillnumber']);
   this.newItemEmitter.emit(listItem);
  }

}
