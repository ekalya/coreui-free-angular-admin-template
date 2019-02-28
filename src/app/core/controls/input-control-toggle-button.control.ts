import { InputControlBase } from '../models';
import { Button } from 'primeng/button';
export class InputControlToggleButton extends InputControlBase<boolean> {
    controlType = 'togglebutton';
    type: Button;

    constructor(options: {} = {}) {
        super(options);
    }
}
