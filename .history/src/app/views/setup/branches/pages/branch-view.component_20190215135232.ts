import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TillnumberMetadataService, ListItem, Branch } from '../../../../core';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.scss']
})
export class BranchViewComponent implements OnInit {
  tillnumberFormMetadata: any[];
  @Output() public OnSubmitEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() public listItemsEmitter: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();

  branch: Branch = new Branch();
  listItems: Array<ListItem> = [];
  branchForm = this.fb.group({
    name: ['', Validators.required],
    physicalLocation: ['', Validators.required],
    telephone: ['']
  });

  constructor(private fb: FormBuilder,
    tillnumberMetadataService: TillnumberMetadataService,
    private route: ActivatedRoute) {
    this.tillnumberFormMetadata = tillnumberMetadataService.getMetadata();
    console.log(this.tillnumberFormMetadata);
   }

  ngOnInit() {
    console.log(this.route.queryParams['branch']);
    this.route.queryParams.subscribe( (param: Branch) => {
      console.log(param);
      this.branch = param;
    });
  }

  actionMenuClick(action: string) {
    console.log('branch action command...');
    console.log(action);
    if (action === 'SUBMIT') {
      this.OnSubmitEvent.emit(this.branchForm);
    }
  }
  removeItemEmitter(item: ListItem) {
    console.log('remove item from list:' + item);
    this.listItems = this.listItems.filter(t => t.description !== item.description);
    this.fireListChangeEvent();
  }
  formValues(formValues: FormGroup) {
  console.log('form values:' + JSON.stringify(formValues.value));
   let listItem: ListItem = new ListItem(formValues.value.id, formValues.value['tillnumber']);
   this.listItems.push(listItem);
   this.fireListChangeEvent();
  }
  fireListChangeEvent() {
    console.log('fire list items event....');
    this.listItems.forEach(item => {
      console.log(item.description);
    });
    this.listItemsEmitter.emit(this.listItems);
  }
  onSubmit() {
    this.OnSubmitEvent.emit(this.branchForm);
  }

}
