import { Pipe, PipeTransform } from '@angular/core';
import { TillNumber, Role } from '../../core';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'arrayToCommaDelimited'
})
export class ArrayToCommaDelimitedPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    let sList = '';
    value.forEach(item => {
      if (item instanceof TillNumber) {
      sList = sList +  (sList.length > 0 ? ',' : '') + (item as TillNumber).number;
      } else if (item instanceof Role) {
        sList = sList +  (sList.length > 0 ? ',' : '') + (item as Role).name;
      }
    });
    return sList;
  }

}
