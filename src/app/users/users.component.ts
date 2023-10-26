import { Component, OnDestroy } from '@angular/core';
import { User, UsersService } from './users.service';
import {
  Observable,
  Subscription,
  filter,
  first,
  forkJoin,
  interval,
  map,
  take,
} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {

  users$: Observable<User[]>;
  counter = 0;

  loading = false;


  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.getUsers();

    this.usersService
      .getCounter()
      .pipe(
        // first(),
        take(10),
        map((v) => v * 2),
        filter((v) => v > 6)
      )
      .subscribe({
        next: (v) => {
          this.counter = v;
        },
      });

    this.loading = true;


  }

}
