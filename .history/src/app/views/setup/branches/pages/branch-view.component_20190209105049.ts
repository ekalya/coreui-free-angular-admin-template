import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TillnumberMetadataService, ListItem } from '../../../../core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.scss']
})
export class BranchViewComponent implements OnInit {
  tillnumberFormMetadata: any[];
  @Output() public OnSubmitEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  listItemsSubject: Subject<Array<ListItem>> = new Subject<Array<ListItem>>();
  items: Observable<Array<ListItem>> = this.listItemsSubject.asObservable();
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
  removeItemEmitter(item: ListItem) {
    console.log('remove item from list:' + item);
    this.listItems = this.listItems.filter(t => t.description !== item.description);
    this.listItemsSubject.next(this.listItems);
  }
  formValues(formValues: FormGroup) {
    console.log('form values:' + JSON.stringify(formValues.value));
   let listItem: ListItem = new ListItem(formValues.value.id, formValues.value['tillnumber']);
   console.log(listItem);
   this.listItems.push(listItem);
   this.listItemsSubject.next(this.listItems);
  }

}
