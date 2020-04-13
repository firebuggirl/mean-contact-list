import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) { }

  // `canActivate` => declare whether or not the user should be allowed access to the route
// `ActivatedRouteSnapshot` + `RouterStateSnapshot` => gain access to route information for redirection
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.loggedIn) {
      // if user ! logged in, store the protected URL they are attempting to access => redirect them back there once they've authenticated.
      localStorage.setItem('authRedirect', state.url);
    }
    if (!this.auth.tokenValid && !this.auth.loggedIn) {
      this.auth.login();
      return false;
    }
    if (this.auth.tokenValid && this.auth.loggedIn) {
      // allowed to access the requested route
      return true;
    }
  }

}
