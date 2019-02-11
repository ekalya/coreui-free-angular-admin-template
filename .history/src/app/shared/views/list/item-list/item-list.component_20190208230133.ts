import { Component, OnInit, Input, Output } from '@angular/core';
import { ListItem } from '../../../../core/models';
import { Subject, Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() lList: Subject<Array<ListItem>> = new Subject<Array<ListItem>>();
  items: Observable<Array<ListItem>> = this.lList.asObservable();

  @Input() listItems: Array<ListItem> = [];
  model: ListItem = {id: 0 , description: ''};

  itemForm: FormGroup;


  constructor(  private fb: FormBuilder) {

  }

  ngOnInit() {
    this.itemForm = this.fb.group({
      description: ['', Validators.required]
    });
  }
  removeItem(item: ListItem) {
    this.listItems  = this.listItems.filter(t => t.description !== item.description);
    this.lList.next(this.listItems);
  }
}
