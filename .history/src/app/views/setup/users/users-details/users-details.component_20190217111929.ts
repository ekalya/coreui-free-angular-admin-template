import { Component, OnInit, EventEmitter, Input, AfterContentInit } from '@angular/core';
import { User, UserService, Role } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  UserDetailsUIService } from '../users-details/user-details-ui.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  userFormMetadata: any[];
  model: User = new User();
  modelEmitter: EventEmitter<User> = new EventEmitter<User>();
  mode: string;
  form: FormGroup;
  constructor(private userService: UserService,
    private userMetadataService: UserDetailsUIService,
    private route: ActivatedRoute,
    private messageService) {
      this.userFormMetadata = this.userMetadataService.getMetadata();

      const json = this.route.snapshot.queryParams['user'];
      this.mode = this.route.snapshot.queryParams['mode'];
      if (json === JSON.stringify({})) {
        this.model = new User();
      } else {
        this.model = JSON.parse(json);
      }
      //this.modelEmitter.emit(this.model);
  }


  ngOnInit() {

  }
  formEmitterEventValues(form: FormGroup) {
    this.form = form;
    console.log(this.form.value);
    this.model.username = this.form.value.username;
  }
  assignedChanges(roles: Role[]) {
    this.model.roles = roles;
  }
  submitResetActionMenuClick(action: string) {
    if (action === 'SUBMIT') {
        console.log(this.form.value);
        console.log(this.model);
        if (this.mode === 'CREATE') {
          this.userService.create(this.model).subscribe(data => {
            console.log('saved ....');
          });
        } else if (this.mode === 'EDIT') {
          this.userService.update(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
            console.log('updated ....');
          });
        }
    }
  }
}
