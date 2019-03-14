import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request || !request.url) {
            return next.handle(request);
        }

        const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(request);
    }
    /*constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercept and add auth...');
        const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
                                .set('authorization', token)
                                .set('Content-Type', 'application/json')
        });
        console.log(JSON.stringify(xhr.headers));
        return next.handle(xhr);
    }*/
 

}
