import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../../../../core/models';
import { Subject, Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  lList: Subject<Array<ListItem>> = new Subject<Array<ListItem>>();
  items: Observable<Array<ListItem>> = this.lList.asObservable();

  @Input() listItems: Array<ListItem> = [];
  model: ListItem = {id:0,description:""};

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
  onSubmit() {
    console.log('create  .....')
    this.listItems.push(new ListItem(this.model.id,this.model.description))
    console.log(this.listItems);
    this.lList.next(this.listItems);
    this.model.id = 0;
    this.model.description = "";
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }
}
