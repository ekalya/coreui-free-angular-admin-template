import { Component, OnInit, EventEmitter, Input, AfterContentInit } from '@angular/core';
import { User, UserService, Role } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsUIService } from '../users-details/user-details-ui.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
  providers: [MessageService]
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
    private messageService: MessageService) {
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
    this.model.username = this.form.value.username;
    this.model.password = this.form.value.password;
  }
  assignedChanges(roles: Role[]) {
    this.model.roles = roles;
  }
  submitResetActionMenuClick(action: string) {
    if (action === 'SUBMIT') {
        console.log(this.model);
        if (this.mode === 'CREATE') {
          this.userService.create(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
          });
        } else if (this.mode === 'EDIT') {
          this.userService.update(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Saved successfully', detail: 'Successfully updated'});
          });
        }
    }
  }
}
