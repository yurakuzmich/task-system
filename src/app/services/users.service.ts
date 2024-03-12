import { Injectable } from '@angular/core';
import { users as USERS } from '../mock-data/users.mock';
import { User } from '../models';
import { BehaviorSubject, Observable, Subscription, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../state/selectors';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser!: User | null;
  userSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userSubscription = this.store.select(selectCurrentUser).subscribe(user => this.currentUser = user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
