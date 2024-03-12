import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('authToken');
  const userData = token ?? null;

  if (!userData) {
    return false;
  }

  //check with currentUser

  return true;
};
