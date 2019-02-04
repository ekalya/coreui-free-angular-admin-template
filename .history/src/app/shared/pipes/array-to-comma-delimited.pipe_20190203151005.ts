import { Pipe, PipeTransform } from '@angular/core';
import { TillNumber } from '../../core';
import { stringify } from '@angular/core/src/render3/util';

@Pipe({
  name: 'arrayToCommaDelimited'
})
export class ArrayToCommaDelimitedPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    console.log(value);
    tillsList: string;
    value.forEach(item => {
      console.log('till number array....');
      console.log(item);
      if ( item instanceof TillNumber) {
        console.log('Is till number instance');
        tillsList = tillsList +  (len(tillsList)>0?", ":"") + (item as TillNumber).Number;
      }
    });
    return value;
  }

}
