import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

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
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login(user: User) {
    console.log(user);
   this.authService.login(user).subscribe( userInfo => {
     console.log(userInfo);
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
        console.log('login failed.....');
      }
   });
  }

}
