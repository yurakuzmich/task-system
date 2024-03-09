import { Injectable } from '@angular/core';
import { users as USERS } from '../mock-data/users.mock';
import { User } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any = USERS;
  currentUser: User | {} = {};
  constructor() {
    this.currentUser = this.users.find((user: User) => user.id === Math.round(Math.random() * 9))
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<User> {
    return of(this.users.find((user: User) => user.id === id));
  }

  getCurrentUser(): Observable<User | {}> {
    return of(this.currentUser);
  }
}
