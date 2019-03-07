import { InputControlBase } from '../models';

export class InputControlSingleSelectList extends InputControlBase<any> {
    controlType = 'singleselect';
    title: String = 'List title';
    options: any[] = [];
    cols: any[];

    constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.cols = options['cols'] || [];
    }
}
