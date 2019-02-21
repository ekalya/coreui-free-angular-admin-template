import { InputControlBase } from '../models';

export class InputControlTextBoxFilter extends InputControlBase<string> {
    controlType = 'textboxfilter';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
