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
  @Input() public displayValueKey: string;
  @Output() public selectedItemChange: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    this.displayValueKey = 'name';
  }

  ngOnInit() {}
  itemSelectedItemChange(selectedItem: any) {
    this.selectedValue = (this.displayValueKey === undefined ? '' : selectedItem[this.displayValueKey]);
    this.selectedItemChange.emit(selectedItem);
  }
}
