import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let timeOffset = (new Date(value)).getTimezoneOffset()*6000;
    let localTime = (new Date(Date.now()-timeOffset)).toISOString().replace('Z',' ').replace('T',' ');
  return localTime;
  }

}
