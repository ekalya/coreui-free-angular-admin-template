import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
@Output() public login: EventEmitter<any> = new EventEmitter();
model: User;

  onLogin(username, password) {
    this.model.username = username;
    this.model.password = password;
    this.login.emit(this.model);
  }

 }