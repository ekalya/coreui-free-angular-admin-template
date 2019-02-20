import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { TableColumn } from '../../../core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss']
})
export class DynamicListComponent implements OnInit {
  @Input() public list: any[];
  @Input() public cols: TableColumn[];
  selectedRow: number;
  @Output() public selectedItemEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  selectRow(index: number, item: any) {
    this.selectedRow = index;
    this.selectedItemEmitter.emit(item);
  }

}
