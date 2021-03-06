import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthTokenStore } from './stores';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
      private router: Router,
      private authStore: AuthTokenStore) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authStore.state === null) {
      this.router.navigate([ '/account/login' ]);
      return false;
    }
    return true;
  }
}
