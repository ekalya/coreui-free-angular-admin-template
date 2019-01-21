import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User  = {
    authorities: [],
    username: '',
    roles: [],
    enabled: false,
    id: 0,
    accountNonExpired: false,
    accountNonLocked: false,
    credentialsNonExpired: false,
    authenticated: false,
    password: ''
  };

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient) {

  }

  login(): Observable<User> {
    return this.http.get('/api/user').pipe(
      map(userData => {
        if (userData) {
          this.currentUser = (userData as User);
          this.currentUser.authenticated = true;
        } else {
          console.log('error loging in....');
        }
        return this.currentUser;
      }), catchError((err: HttpErrorResponse) => {
          console.log(err);
          return this.currentUser;
      })
    );
  }

  logout(): void {
    this.currentUser.authenticated = false;
  }
}



