import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
@Output() public login: EventEmitter<any> = new EventEmitter();

login(){
  
}

 }
