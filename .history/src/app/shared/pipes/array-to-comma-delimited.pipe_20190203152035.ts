import { Pipe, PipeTransform } from '@angular/core';
import { TillNumber } from '../../core';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'arrayToCommaDelimited'
})
export class ArrayToCommaDelimitedPipe implements PipeTransform {

  transform(value: TillNumber[], args?: any): any {
    console.log(value);
    let tillsList = '';
    value.forEach(item => {
      console.log('till number array....');
      console.log(item);
      console.log(item.number);
      tillsList = tillsList +  (tillsList.length > 0 ? ',' : '') + (item as TillNumber).number;
    });
    console.log('Tills:' + tillsList);
    return value;
  }

}
