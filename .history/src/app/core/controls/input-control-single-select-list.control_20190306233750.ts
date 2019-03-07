import { InputControlBase } from '../models';
import { Output } from '@angular/core';

export class InputControlSingleSelectList extends InputControlBase<any> {
    controlType = 'singleselect';
    title: String = 'List title';
    @Output() public options: any[] = [];
    cols: any[];

    constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.cols = options['cols'] || [];
    }
}
