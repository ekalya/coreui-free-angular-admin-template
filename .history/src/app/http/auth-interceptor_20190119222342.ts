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
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable()
export class  AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('user before hardcode:::' + this.authService.currentUser);
        const auth = this.authService.currentUser ?
        'Basic ' + btoa(this.authService.currentUser.username + ':' + this.authService.currentUser.password) : null;
    }
}
