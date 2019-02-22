import { InputControlBase } from '../models';

export class InputControlMultiSelect extends InputControlBase<any[]> {
    controlType = 'multiselect';
    options: {key: string, value: string}[] = [];
  
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
    }
}
