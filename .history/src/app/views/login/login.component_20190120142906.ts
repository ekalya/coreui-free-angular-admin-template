import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
@Output() public login: EventEmitter<User> = new EventEmitter();
@Input() public model: User;
@Input() public error: string;
loginForm: FormGroup;

constructor(
  private fb: FormBuilder
) {}

ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}

onLogin() {
    this.login.emit(this.model);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.onLogin();
    }
  }
}
