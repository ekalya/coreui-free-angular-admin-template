import { Pipe, PipeTransform } from '@angular/core';
import { TillNumber } from '../../core';

@Pipe({
  name: 'arrayToCommaDelimited'
})
export class ArrayToCommaDelimitedPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    console.log(value);
    value.forEach(item => {
      console.log('till number array....');
      console.log(item);
      if ( item instanceof TillNumber) {
        console.log('Is till number instance');
      }
    });
    return value;
  }

}
