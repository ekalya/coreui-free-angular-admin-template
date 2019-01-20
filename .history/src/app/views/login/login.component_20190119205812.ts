import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

@Output() public login: EventEmitter<User> = new EventEmitter();
@Input() public model: User;

constructor() {}

ngOnInit(): void {}

  onLogin() {
    this.login.emit(this.model);
  }
}
