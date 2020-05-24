import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcMembers'
})
export class CalcMembersPipe implements PipeTransform {

  transform(value: number): string {
    console.log('pipe call');
    if (value < 5) {
      return 'low';
    } else if (value >= 5 && value <= 7) {
      return 'medium';
    } else if (value > 7) {
      return 'hight';
    }
  }

}
