import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../models/user';
import { HttpError } from '../../http/error';

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

  error: HttpError;

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
      }), catchError((err: any) => {
          this.error = err;
          return Observable.throw(err);
      })
    );
  }

  logout(): void {
    this.currentUser.authenticated = false;
  }
}



