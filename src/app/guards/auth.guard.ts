import { CanActivateFn, Router } from '@angular/router';
import { currentUser } from '../consts/consts';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const loggedInUser = localStorage.getItem(currentUser);
  const router = inject(Router);
  if (loggedInUser) {
    return true;
  }
  router.navigate(['/login']);
  return false
};
