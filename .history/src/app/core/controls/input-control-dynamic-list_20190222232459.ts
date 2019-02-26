import { InputControlBase } from '../models';

export class InputControlDynamicList extends InputControlBase<any[]> {
    controlType = 'dynamiclist';

    constructor(options: {} = {}) {
        super(options);
    }
}
