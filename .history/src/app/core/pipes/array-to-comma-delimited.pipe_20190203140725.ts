import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToCommaDelimited'
})
export class ArrayToCommaDelimitedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let obj = {};
    value.forEach(item => {
      console.log(item);
    });
    return value;
  }

}
