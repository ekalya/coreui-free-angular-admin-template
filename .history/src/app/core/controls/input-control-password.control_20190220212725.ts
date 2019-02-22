import { InputControlBase } from '../models';

export class InputControlPassword  extends InputControlBase<string> {
    controlType = 'password';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
