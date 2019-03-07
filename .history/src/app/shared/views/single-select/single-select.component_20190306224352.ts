import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent implements OnInit {
  @Input() public listItems: any[] = [];
  @Input() public cols: any[] = [];
  @Input() public title: string;
  @Input() public selectedValue: string;
  @Output() public selectedItemChange: EventEmitter<any> = new EventEmitter<any>();
  selectedItem: any;
  constructor() {}

  ngOnInit() {}
  itemSelectedItemChange(selectedItem: any) {
    this.selectedItem = selectedItem;
  }
}
