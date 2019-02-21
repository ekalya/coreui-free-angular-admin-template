import { InputControlBase } from '../models';

export class InputControlDropdown extends InputControlBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];
  
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
      this.controlType = options['type'] || 'dropdown';
    }
}
