import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent implements OnInit {
  @Input() public listItems: any[] = [];
  @Input() public cols: any[] = [];
  @Input() public title: string;
  selectedItem: any;
  constructor() {}

  ngOnInit() {}
  itemSelectedItemChange(selectedItem: any) {
    this.selectedItem = selectedItem;
  }
}
