import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthService, AlertService, LoginService, StateStorageService } from '../core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  providers: [ MessageService]
})
export class LoginContainerComponent implements OnInit {
  model: User = {
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
  authenticationError: boolean;
  credentials: any;
  constructor(private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private messageService: MessageService,
    private loginService: LoginService,
    private stateStorageService: StateStorageService) {
    this.authService.logout();
  }

  ngOnInit() {
  }
  login(user: User) {
    this.authService.currentUser = user;
   this.authService.login().subscribe( userInfo => {
      if (userInfo != null && userInfo.authenticated === true) {
        if (this.authService.redirectUrl == null) {
            this.authService.redirectUrl = '/';
        }
        if (this.authService.redirectUrl === null) {
          this.authService.redirectUrl = '/';
        }
        if (typeof this.authService.redirectUrl === 'undefined') {
          this.authService.redirectUrl = '/';
        }
        this.router.navigate([this.authService.redirectUrl]);
      }
    }, err => {
      this.messageService.add({severity: 'error', summary: 'Login failed', detail: 'Login failed'});
    }, ()  =>  {

    });
  }

  login2(user: User) {
    this.loginService
        .login({
            username: user.username,
            password: user.password,
            rememberMe: true
        })
        .then(() => {
            this.authenticationError = false;
            if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
                this.router.navigate(['']);
            }

            // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // since login is successful, go to stored previousState and clear previousState
            const redirect = this.stateStorageService.getUrl();
            if (redirect) {
                this.stateStorageService.storeUrl(null);
                this.router.navigate([redirect]);
            }
        })
        .catch((error) => {
            this.authenticationError = true;
        });
  }

}
