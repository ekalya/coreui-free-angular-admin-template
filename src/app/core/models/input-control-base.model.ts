import { InputControlDataType } from '../controls/input-control-data-type.control';
export class InputControlBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    placeholder?: string;
    keyFilter: string;
    displayValueKey: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        placeholder?: string,
        keyFilter?: string;
        displayValueKey?: string;
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.placeholder = options.placeholder || '';
        this.keyFilter = options.keyFilter || InputControlDataType.Alphanumeric;
        this.displayValueKey = options.displayValueKey || '';
    }
}
