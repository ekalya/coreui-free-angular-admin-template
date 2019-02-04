import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToCommaDelimited'
})
export class ArrayToCommaDelimitedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let obj = {};
    value.forEach(item => obj[item.Field] = item.Value);

    // #2 Converting the object to JSON...
    let json = JSON.stringify(obj);
    return json;
  }

}
