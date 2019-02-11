import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpError } from './error';
import { copyStyles } from '@angular/animations/browser/src/util';

@Injectable()
export class  AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.authService.currentUser ?
        'Basic ' + btoa(this.authService.currentUser.username + ':' + this.authService.currentUser.password) : null;

        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
                                .set('authorization', auth)
          });
        console.log(xhr.headers);
        console.log(xhr.body);
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
