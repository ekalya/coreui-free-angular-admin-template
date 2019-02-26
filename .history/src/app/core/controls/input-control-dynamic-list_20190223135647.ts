import { InputControlBase } from '../models';

export class InputControlDynamicList extends InputControlBase<any[]> {
    controlType = 'dynamiclist';
    columns: any[] = [];
    controls: any[] = [];
    model: any;
    constructor(options: {} = {}) {
        super(options);
        this.columns = options['columns'] || [];
        this.controls = options['controls'] || [];
        this.model = options['model'] || {};
    }
}
