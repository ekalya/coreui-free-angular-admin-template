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
      if ( (item instanceof TillNumber) === true) {
        console.log('Is till number instance');
        tillsList = tillsList +  (tillsList.length > 0 ? ',' : '') + (item as TillNumber).Number;
      }
    });
    console.log('Tills:' + tillsList);
    return value;
  }

}
