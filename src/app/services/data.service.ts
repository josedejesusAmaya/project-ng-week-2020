import { Injectable } from '@angular/core';
import sub from 'date-fns/sub';
import { format } from 'date-fns';

import { Community } from '../models/community.model';
import { COMMUNITIES } from './communities';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getListA(limit: number = 50) {
    return this.generateCommunities(limit);
  }

  getListB(limit: number = 50) {
    return this.generateCommunities(limit);
  }

  generateName() {
    const index = this.getRandomInt(0, COMMUNITIES.length - 1);
    return COMMUNITIES[index];
  }

  generateDate() {
    return format(new Date(2014, 1, 11), 'MM/dd/yyyy');
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateCommunity(newName?: string): Community {
    return {
      name: newName ? newName : this.generateName(),
      members: this.getRandomInt(1, 10),
      created_at: this.generateDate(),
    };
  }

  generateCommunities(limit: number = 50): Community[] {
    const result = [];
    for (let index = 0; index < limit; index++) {
      result.push(this.generateCommunity());
    }
    return result;
  }
}
