
import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { User } from '../../core/models/user';


export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATED_USER = 'AUTHENTICATED_USER';
export const LOG_OFF_USER = 'LOG_OFF_USER';
export const LOGGED_OFF_USER = 'LOGGED_OFF_USER';

@Injectable()
export class Authentication {
    constructor(private _authenticationService: AuthService) { }


    loggedInUser(user) {
        return { type: AUTHENTICATED_USER, user};
    }

    loggedOutUser(user) {
        return { type: LOGGED_OFF_USER, user};
    }

    loginUser(user) {
        return dispatch => {
            this._authenticationService.currentUser = user;
            return this._authenticationService.login().subscribe(
                (userDetails: User) => dispatch(this.loggedInUser(userDetails))
            );
        };
    }

    logoutUser(user) {
        this._authenticationService.currentUser = user;
        return dispatch => {
            return this._authenticationService.logout().subscribe(
                (userDetails: User) => dispatch(this.loggedOutUser(userDetails))
            );
        };
    }
}