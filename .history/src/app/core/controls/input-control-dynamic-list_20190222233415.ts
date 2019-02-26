import { InputControlBase } from '../models';

export class InputControlDynamicList extends InputControlBase<any[]> {
    controlType = 'dynamiclist';
    columns: string[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.columns = options['columns'] || [];
    }
}
