import { InputControlBase } from '../models';

export class InputControlTimeOnlyFrom extends InputControlBase<string> {
    controlType = 'timeOnlyFrom';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
