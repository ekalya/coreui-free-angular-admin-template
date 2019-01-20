import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
@Output() public login: EventEmitter<any> = new EventEmitter();
@Input() public model: User;

  onLogin(event) {
    this.login.emit(this.model);
  }

 }
