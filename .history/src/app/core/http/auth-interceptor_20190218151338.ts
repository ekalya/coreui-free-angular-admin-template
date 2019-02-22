import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpError } from './error';

@Injectable()
export class  AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.authService.currentUser ?
        'Basic ' + btoa(this.authService.currentUser.username + ':' + this.authService.currentUser.password) : null;

        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
                                .set('authorization', auth)
                                .set('Content-Type', 'application/json')
        });
        return next.handle(xhr)
        .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage: HttpError  = {code: 0, message: ''};
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage.message = error.error.message;
                } else {
                    // server-side error
                    errorMessage.code = error.status;
                    errorMessage.message = error.message;
                }
                return throwError(errorMessage);
            })
        );
    }
}
