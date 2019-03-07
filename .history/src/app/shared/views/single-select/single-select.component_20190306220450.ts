import { Component, OnInit, Input } from '@angular/core';
import { InputControlBase, DynamicFormsBridge } from '../../../core/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss']
})
export class SingleSelectComponent implements OnInit {
  @Input() public controls: InputControlBase<any>[] = [];
  @Input() public dynamicFormsBridge: DynamicFormsBridge = new DynamicFormsBridge();
  @Input() public form: FormGroup;
  @Input() public model: any;
  @Input() public listItems: any[] = [];
  @Input() public cols: any[] = [];
  @Input() public title: string;
  @Input() public selectedItem: any;
  constructor() {}

  ngOnInit() {}
  itemSelectedItemChange(selectedItem: any) {
    this.selectedItem = selectedItem;
  }
}
