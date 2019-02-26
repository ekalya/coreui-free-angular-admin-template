import { InputControlBase } from '../models';

export class InputControlDynamicList extends InputControlBase<any[]> {
    controlType = 'dynamiclist';
    columns: string[] = [];
    controls: any[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.columns = options['columns'] || [];
        this.controls = options['controls'] || [];
    }
}
