import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../core';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
@Output() public login: EventEmitter<User> = new EventEmitter();
@Input() public model: User;
loginForm: FormGroup;

constructor(
  private fb: FormBuilder
) {
}

ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}

onLogin() {
    console.log(this.loginForm.valid);
    if (!this.loginForm.valid) {
      console.log('return since form is invalid.....');
      return;
    }
    this.login.emit(this.model);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.onLogin();
    }
  }
}
