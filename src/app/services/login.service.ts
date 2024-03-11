import { Injectable } from '@angular/core';
import { siteAdmins } from '../mock-data/admins.mock';
import { Store } from '@ngrx/store';
import { loginUser, logoutUser } from '../state/actions';

const ADMINS = siteAdmins;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  admins = ADMINS;

  constructor(private store: Store) { }

  login(email: string, password: string) {
    const user = this.admins.find(admin => admin.email === email && admin.password === password);
    if(!user) {
      return false;
    } else {
      const token = `${email}:${password}`;
      localStorage.setItem('authToken', token);
      this.store.dispatch(loginUser({user}));
      return true;
    }
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.store.dispatch(logoutUser());
  }
}
