import { Pipe, PipeTransform } from '@angular/core';
import { TillNumber, Role } from '../../core';

@Pipe({
  name: 'arrayToCommaDelimited'
})
export class ArrayToCommaDelimitedPipe implements PipeTransform {

  transform(value: TillNumber[], args?: any): any {
    let sList = '';
    value.forEach(item => {
      sList = sList +  (sList.length > 0 ? ',' : '') + (item as TillNumber).number;
    });
    return sList;
  }

}
