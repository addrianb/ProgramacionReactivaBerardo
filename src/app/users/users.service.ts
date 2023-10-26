import { Injectable } from '@angular/core';
import { Observable, delay, interval, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
}
export interface Country {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getCounter(): Observable<number> {
    return interval(1000);
  }


  getUsers(): Observable<User[]> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          id: 1,
          name: 'adrian',
        },
        {
          id: 2,
          name: 'german',
        },
      ]);
      subscriber.complete();
    });
  }
}
