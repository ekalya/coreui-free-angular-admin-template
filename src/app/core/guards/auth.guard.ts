import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { StateStorageService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private router: Router,
    private stateStorageService: StateStorageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    console.log('check login ......on the way to :' + url);
    const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
    console.log('token:' + token);
    if (!!token) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.stateStorageService.storeUrl(url);
    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
