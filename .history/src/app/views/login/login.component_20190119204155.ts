import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

@Output() public login: EventEmitter<User> = new EventEmitter();
@Input() public model: User;
testForm: FormGroup;

constructor(private fb: FormBuilder) {

}

ngOnInit(): void {
  this.testForm = this.fb.group({
    FirstName: '',
    LastName: ''
  });
}

  onLogin() {
    this.login.emit(this.model);
  }
}
