import { InputControlBase } from '../models';
import { Input, EventEmitter } from '@angular/core';

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
        this.value = options['value'] || [];
    }
    public itemAddedEvent(data: any) {
        console.log('item added ..............');
        console.log(data);
        this.value.push(data);
        console.log(this.value);
    }
    public itemUpdatedEvent(data: any) {
        console.log('item updated ..............');
        console.log(data);
    }
}
