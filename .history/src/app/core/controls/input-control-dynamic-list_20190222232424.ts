import { InputControlBase } from '../models';

export class InputControlDynamicList extends InputControlBase<any[]> {
    controlType = 'dynamiclist';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
