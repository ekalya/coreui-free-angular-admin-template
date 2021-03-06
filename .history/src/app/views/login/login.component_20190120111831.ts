import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

@Output() public login: EventEmitter<User> = new EventEmitter();
@Input() public model: User;
@Input() public error: string;

  onLogin() {
    this.login.emit(this.model);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.onLogin();
    }
  }
}
