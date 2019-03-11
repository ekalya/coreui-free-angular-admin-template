import { InputControlBase } from '../models';

export class InputControlTimeOnlyTo extends InputControlBase<string> {
    controlType = 'timeOnlyTo';
    type: string;

    constructor(options: {} = {}) {
        super(options);
    }
}
