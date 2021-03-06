import { Injectable } from '@angular/core';
import { InputControlBase } from '../../../../core/models';
import { InputControlTextBox, InputControlTextBoxFilter, InputControlDataType } from '../../../../core/controls';
import { InputControlToggleButton } from '../../../../core/controls/input-control-toggle-button.control';


@Injectable({
  providedIn: 'root'
})
export class CurrencyDetailsUIService {
  constructor() {
  }
  getMetadata() {

    const metadata: InputControlBase<any>[] = [
      new InputControlTextBox({
        key: 'code',
        label: 'Code',
        placeholder: 'Enter code',
        value: '',
        required: true,
        order: 1
      }),
      new InputControlTextBox({
        key: 'name',
        label: 'Name',
        placeholder: 'Enter name',
        value: '',
        required: true,
        order: 2
      }),
      new InputControlTextBox({
        key: 'symbol',
        label: 'Symbol',
        placeholder: 'Enter the currency symbol',
        value: '',
        required: true,
        order: 3
      }),
      new InputControlTextBoxFilter({
        key: 'conversionRate',
        label: 'Conversion Rate',
        placeholder: 'Conversion Rate',
        keyFilter: InputControlDataType['Numbers'],
        value: '',
        required: true,
        order: 4
      }),
      new InputControlToggleButton({
        key: 'isBaseCurrency',
        label: 'Is base currency',
        value: 'false',
        required: true,
        order: 5
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
  getColumns() {
  const columns: any[] = [];
  this.getMetadata().forEach( md => {
    if (md.controlType === 'textbox'
    || md.controlType === 'togglebutton') {
      columns.push({ field: md.key, header: md.key });
    }
  });
  return columns;
  }
}
