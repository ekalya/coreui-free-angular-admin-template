import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from '../services';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        console.log(err);
                        if (err.status === 401) {
                            console.log('auth exprired......');
                            this.loginService.logout();
                        }
                    }
                }
            )
        );
    }
}
