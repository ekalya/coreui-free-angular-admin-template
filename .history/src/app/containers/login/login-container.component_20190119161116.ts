import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
   this.authService.login().subscribe( user => {
     console.log(this.authService.redirectUrl);
    console.log(this.authService.isLoggedIn);
      if (this.authService.isLoggedIn === true) {
        this.router.navigate([this.authService.redirectUrl]);
      }
   });
  }

}
