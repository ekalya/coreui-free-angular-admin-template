import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { HttpError } from '../../http/error';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
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
  error = '';
  constructor(private authService: AuthService, private router: Router) { 
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
      } else {
        console.log('Login failed......');
      }
    }, err => {
      console.log(this.authService.error instanceof HttpError);
    if (this.authService.error instanceof HttpError) {
        console.log(this.authService.error.code);
        console.log(this.authService.error.message);
        this.error = this.authService.error.message;
    }
    }, ()  =>  console.log('Finished.....'));
  }

}
