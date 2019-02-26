import { InputControlBase } from '../models';
import { Input, EventEmitter } from '@angular/core';

export class InputControlDynamicList extends InputControlBase<any[]> {
    controlType = 'dynamiclist';
    columns: any[] = [];
    controls: any[] = [];
    model: any;
    @Input() public itemAddedEvent: EventEmitter<any> = new EventEmitter<any>();
    constructor(options: {} = {}) {
        super(options);
        this.columns = options['columns'] || [];
        this.controls = options['controls'] || [];
        this.model = options['model'] || {};
        this.itemAddedEvent.subscribe(data => {
            console.log(data);
        });
    }
}
