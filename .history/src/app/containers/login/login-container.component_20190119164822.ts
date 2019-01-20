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
  
  user: User = {
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
  login() {
   this.authService.login().subscribe( user => {
      if (this.authService.isLoggedIn === true) {
        if (this.authService.redirectUrl === null) {
          this.router.navigate(['/']);
        }
        else {
          this.router.navigate([this.authService.redirectUrl]);
        } 
      }
   });
  }

}
