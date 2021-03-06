import { Injectable } from '@angular/core';

import { AccountService } from './account.service';
import { AuthServerService } from './auth-server.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(
        private accountService: AccountService,
        private authServerProvider: AuthServerService,
        private router: Router
    ) {}

    login(credentials, callback?) {
        const cb = callback || function() {};

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(
                data => {
                    this.accountService.identity(true).then(account => {
                        resolve(data);
                    });
                    return cb();
                },
                err => {
                    this.logout();
                    reject(err);
                    return cb(err);
                }
            );
        });
    }

    loginWithToken(jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }

    logout() {
        this.authServerProvider.logout();
        this.accountService.authenticate(null);
        this.router.navigate(['/login']);
    }
}
