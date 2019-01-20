import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
   this.authService.login().subscribe( user => {
    console.log(this.authService.isLoggedIn);
   });
  }

}
