import { InputControlBase } from '../models';

export class InputControlPickList  extends InputControlBase<any[]> {
    controlType = 'picklist';
    type: string;
    options: any[];

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        this.options = options['options'] || [];
        this.refreshSource();
    }
    refreshSource() {
        if (this.options === undefined || this.value === undefined) {
            return;
        }
        this.options = this.options.filter(o => this.value.filter(si => si.label === o.label).length === 0);
    }
    getColumns(): any[] {
        const cols: any[] = [{ field: 'label', header: 'Label' }, { field: 'value', header: 'Value' }];
        return cols;
    }
}
