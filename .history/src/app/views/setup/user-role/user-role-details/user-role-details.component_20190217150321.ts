import { Component, OnInit, EventEmitter } from '@angular/core';
import { Role, UserRoleService } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-role-details',
  templateUrl: './user-role-details.component.html',
  styleUrls: ['./user-role-details.component.scss'],
  providers: [ MessageService]
})
export class UserRoleDetailsComponent implements OnInit {
  userRoleFormMetadata: any[];
  model: Role = new Role();
  modelEmitter: EventEmitter<Role> = new EventEmitter<Role>();
  mode: string;
  form: FormGroup;
  constructor(private userRoleService: UserRoleService,
    private userRoleMetadataService: UserRoleDetailsUIService,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      this.userRoleFormMetadata = this.userRoleMetadataService.getMetadata();

      const json = this.route.snapshot.queryParams['role'];
      this.mode = this.route.snapshot.queryParams['mode'];
      if (json === JSON.stringify({})) {
        this.model = new Role();
      } else {
        this.model = JSON.parse(json);
      }
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
