import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TillnumberMetadataService, ListItem, Branch } from '../../../../core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.scss']
})
export class BranchViewComponent implements OnInit {
  tillnumberFormMetadata: any[];
  @Output() public OnSubmitEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() public listItemsEmitter: EventEmitter<Array<ListItem>> = new EventEmitter<Array<ListItem>>();
  items: BehaviorSubject<Array<ListItem>> = new BehaviorSubject<Array<ListItem>>([]);
  @Input() public branch: Branch = new Branch();
  listItems: Array<ListItem> = [];
  branchForm = this.fb.group({
    name: ['', Validators.required],
    physicalLocation: ['', Validators.required],
    telephone: ['']
  });

  constructor(private fb: FormBuilder,
    tillnumberMetadataService: TillnumberMetadataService) {
    this.tillnumberFormMetadata = tillnumberMetadataService.getMetadata();
  }

  ngOnInit() {
    this.listItems = [];
    this.branch.tillNumbers.forEach(tillnumber => {
      this.listItems.push(new ListItem(tillnumber.id, tillnumber.number));
    });
    this.items.next(this.listItems);
  }

  submitResetActionMenuClick(action: string) {
    if (action === 'SUBMIT') {
      this.listItemsEmitter.emit(this.listItems);
      this.OnSubmitEvent.emit(this.branchForm);
    }
  }
  removeItemFromListEmitter(item: ListItem) {
    this.listItems = this.listItems.filter(t => t.description !== item.description);
    this.fireListChangeEvent();
  }
  tillNumberFormValues(formValues: FormGroup) {
   let listItem: ListItem = new ListItem(formValues.value.id, formValues.value['tillnumber']);
   this.listItems.push(listItem);
   this.fireListChangeEvent();
  }
  fireListChangeEvent() {
    this.listItemsEmitter.emit(this.listItems);
  }
  onSubmit() {
    this.listItemsEmitter.emit(this.listItems);
    this.OnSubmitEvent.emit(this.branchForm);
  }

}
