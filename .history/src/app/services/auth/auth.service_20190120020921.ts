import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
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
      }), catchError((err: any) => {
          if (err) {
            console.log('Error ...........');
            console.log(err);
          }
          let errMsg = 'unknown error';
          if ( err instanceof HttpErrorResponse) {
             errMsg = (err as HttpErrorResponse).statusText;
             console.log((err as HttpErrorResponse).message);
          }
          console.log(errMsg);
          return Observable.throw({error: errMsg});
      })
    );
  }

  logout(): void {
    this.currentUser.authenticated = false;
  }
}



