import { Pipe, PipeTransform } from '@angular/core';
import { TillNumber } from '../../core';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'arrayToCommaDelimited'
})
export class ArrayToCommaDelimitedPipe implements PipeTransform {

  transform(value: TillNumber[], args?: any): any {
    let tillsList = '';
    value.forEach(item => {
      tillsList = tillsList +  (tillsList.length > 0 ? ',' : '') + (item as TillNumber).number;
    });
    return tillsList;
  }

}
