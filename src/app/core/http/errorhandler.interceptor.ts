import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from '../services';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (!((err.status === 401) && (err.message === '' || (err.url && err.url.includes('/userdetails/authenticate'))))) {
                            console.log('broadcast error.......');
                            console.log(err);
                            this.loginService.logout();
                        }
                    }
                }
            )
        );
    }
}
