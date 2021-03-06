import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { ApiService } from '../api.service';
import { User } from '../../models';


@Injectable({ providedIn: 'root' })
export class AuthServerService {
    constructor(
        private http: HttpClient,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService,
        private apiService: ApiService) {}

    getToken() {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }

    login(credentials): Observable<any> {
        const data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post('/userdetails/authenticate', data, { observe: 'response' }).pipe(map(authenticateSuccess.bind(this)));

        function authenticateSuccess(resp) {
            const bearerToken = resp.body.authorization;
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                const jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    }

    loginWithToken(jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        } else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    }

    storeAuthenticationToken(jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        } else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    }

    logout(callback?) {
        /*return new Observable(observer => {
            this.$localStorage.clear('authenticationToken');
            this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });*/
        const cb = callback || function() {};
        return new Promise((resolve, reject) => {
            this.apiService.get<User>('/userdetails/logout/').subscribe(
                data =>{
                    resolve(data);
                    return cb();
                },
                err =>{
                    reject(err);
                    return cb(err);
                });
        });
    }
}
