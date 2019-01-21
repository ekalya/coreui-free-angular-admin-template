import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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

  login(user: User): Observable<User> {
    const headers = new HttpHeaders(
      user ? {
            authorization: 'Basic ' + btoa(user.username + ':' + user.password)
          }
        : {}
    );
    //return this.http.get('/api/user', { headers: headers }).pipe(
      return this.http.get('/api/user').pipe(
      map(userData => {
        if (userData) {
          user = (userData as User);
          user.authenticated = true;
          this.currentUser = user;
        }
        return user;
      })
    );
  }

  logout(): void {
    this.currentUser.authenticated = false;
  }
}
