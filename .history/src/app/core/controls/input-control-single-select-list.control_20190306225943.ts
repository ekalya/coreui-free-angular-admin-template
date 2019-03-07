import { InputControlBase } from '../models';

export class InputControlSingleSelectList extends InputControlBase<any> {
    controlType = 'singleselect';
    options: any[] = [];
  
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
      this.controlType = options['type'] || 'dropdown';
    }
}
