import { InputControlBase } from '.';


export class TextBoxInputControl  extends InputControlBase<string> {
    controlType = 'textbox';
    type: string;
  
    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
}
