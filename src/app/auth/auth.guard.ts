import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // return (authService: AuthService) => {
  //   console.log('Logged in: ', authService.isLoggedIn());
  //   if (authService.isLoggedIn()) {
  //     return true;
  //   } else {
  //     const router = new Router();
  //     router.navigate(['/login']);
  //     return false;
  //   }
  // };
  return true;
};
