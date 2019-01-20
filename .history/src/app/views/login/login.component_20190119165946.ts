import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
@Output() public login: EventEmitter<any> = new EventEmitter();
@Input() public user: User;

  onLogin(event) {
    this.login.emit(this.user);
  }

 }
