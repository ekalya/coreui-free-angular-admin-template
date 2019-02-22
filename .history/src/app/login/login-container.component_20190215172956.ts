import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthService, AlertService } from '../core';


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
  constructor(private authService: AuthService, 
    private router: Router, 
    private alertService: AlertService) { 
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
      this.alertService.error(this.authService.error.message);
    }, ()  =>  {
      //end ......
    });
  }

}
