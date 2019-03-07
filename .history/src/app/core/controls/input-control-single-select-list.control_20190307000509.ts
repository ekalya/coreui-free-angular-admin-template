import { InputControlBase } from '../models';

export class InputControlSingleSelectList extends InputControlBase<any> {
    controlType = 'singleselect';
    title: String = 'List title';
    options: any[] = [];
    cols: any[];
    dataProvider: any;
    displayValueKey: string;
    constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.cols = options['cols'] || [];
    this.displayValueKey = options['displayValueKey'] || '';
    this.dataProvider = options['dataProvider'] || null;
    if ( this.dataProvider !== null) {
        this.dataProvider.getAll().subscribe(data => {
            this.options = data;
            console.log(data);
        });
    }
    }
}
