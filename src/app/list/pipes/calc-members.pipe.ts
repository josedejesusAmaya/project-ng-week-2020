import { Pipe, PipeTransform } from '@angular/core';
import { memoize } from 'lodash';

@Pipe({
  name: 'calcMembers'
})
export class CalcMembersPipe implements PipeTransform {

  transform(value: number): string {
    return calcMembersMemoize(value);
  }
}

const calcMembers = (value) => {
  console.log('pure ' + value);
  if (value < 5) {
    return 'low';
  } else if (value >= 5 && value <= 7) {
    return 'medium';
  } else if (value > 7) {
    return 'hight';
  }
};

const calcMembersMemoize = memoize(calcMembers);
