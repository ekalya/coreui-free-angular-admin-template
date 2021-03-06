import { Component, OnInit, EventEmitter } from '@angular/core';
import { Role, UserRoleService, Authority } from '../../../../core';
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
    this.model.name = this.form.value.name;
  }
  assignedChanges(authorities: Authority[]) {
    this.model.authorities = authorities;
  }
  submitResetActionMenuClick(action: string) {
    if (action === 'SUBMIT') {
        if (this.mode === 'CREATE') {
          this.userRoleService.create(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
          });
        } else if (this.mode === 'EDIT') {
          this.userRoleService.update(this.model).subscribe(data => {
            this.messageService.add({severity: 'success', summary: 'Saved successfully', detail: 'Successfully updated'});
          });
        }
    }
  }
}
