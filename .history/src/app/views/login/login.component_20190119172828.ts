import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
@Output() public login: EventEmitter<any> = new EventEmitter();
@Input() public model: User;
loginForm: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.loginForm = this.fb.group({
    username: null,
    password: null
  });

  onLogin(event) {
    this.model.username = this.loginForm.controls.username.value;
    this.model.password = this.loginForm.controls.password.value;
    this.login.emit(this.model);
  }

 }
