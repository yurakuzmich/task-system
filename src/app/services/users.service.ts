import { Injectable } from '@angular/core';
import { users as USERS } from '../mock-data/users.mock';
import { User } from '../models';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(USERS);
  users$: Observable<User[]> = this.usersSubject.asObservable();

  private currentUserSubject: BehaviorSubject<User | {}> = new BehaviorSubject<User | {}>({});
  currentUser$: Observable<User | {}> = this.currentUserSubject.asObservable();

  constructor() {
    this.initCurrentUser(); // Initialize current user when the service is created
  }

  private initCurrentUser(): void {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.currentUserSubject.next(storedUser);
  }

  getUsers(): void {
    this.usersSubject.next(USERS);
  }

  getUser(id: number): Observable<User> {
    const user = USERS.find(user => user.id === id);
    if (user) {
      return of(user);
    } else {
      return throwError(`User with id ${id} not found`);
    }
  }

  getCurrentUser(): Observable<User | {}> {
    return this.currentUser$;
  }
}
