import { Pipe, PipeTransform } from '@angular/core';
import { format as datefnsFormat } from 'date-fns';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | number, format: string = 'YYYY/MM/DD'): string {
    return datefnsFormat(value, format);
  }

}
