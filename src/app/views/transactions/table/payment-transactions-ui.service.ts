import { Injectable } from '@angular/core';
import { InputControlBase, UIInterface } from '../../../core/models';
import { InputControlTextBox } from '../../../core/controls';

@Injectable({
  providedIn: 'root'
})
export class PaymentTransactionsUIService implements UIInterface {

  getMetadata() {
    const metadata: InputControlBase<any>[] = [
      new InputControlTextBox({
        key: 'tillNumber',
        label: 'tillNumber',
        order: 1
      }), new InputControlTextBox({
        key: 'mobileNumber',
        label: 'mobileNumber',
        order: 2
      }), new InputControlTextBox({
        key: 'amount',
        label: 'amount',
        order: 3
      }), new InputControlTextBox({
        key: 'timeStamp',
        label: 'timeStamp',
        order: 4
      }), new InputControlTextBox({
        key: 'transactionRefNo',
        label: 'transactionRefNo',
        order: 5
      }), new InputControlTextBox({
        key: 'servedBy',
        label: 'servedBy',
        order: 6
      }), new InputControlTextBox({
        key: 'additionalInfo',
        label: 'additionalInfo',
        order: 7
      }), new InputControlTextBox({
        key: 'posTransactionNumber',
        label: 'posTransactionNumber',
        order: 8
      }), new InputControlTextBox({
        key: 'customerName',
        label: 'customerName',
        order: 9
      })
    ];

    return metadata.sort((a, b) => a.order - b.order);
  }
  getColumns() {
  const columns: any[] = [];
  this.getMetadata().forEach( md => {
    if (md.controlType === 'textbox') {
      columns.push({ field: md.key, header: md.key });
    }
  });
  return columns;
  }
}
