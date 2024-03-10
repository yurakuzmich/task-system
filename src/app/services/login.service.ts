import { Injectable } from '@angular/core';
import { users } from '../mock-data/users.mock';

const USERS = users;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users = USERS;

  constructor() { }

  login() {  }

  logOut() {

  }
}
