import { Component, OnInit, EventEmitter } from '@angular/core';
import { Role, UserRoleService, Authority } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserRoleDetailsUIService } from './user-role-details-ui.service';
import { ButtonActions, DynamicFormActions } from '../../../../core/enums';

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
  mode: DynamicFormActions = DynamicFormActions.READ;
  form: FormGroup;
  constructor(private userRoleService: UserRoleService,
    private userRoleMetadataService: UserRoleDetailsUIService,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      this.userRoleFormMetadata = this.userRoleMetadataService.getMetadata();

      const json = this.route.snapshot.queryParams['role'];
      this.mode = (this.route.snapshot.queryParams['mode'] as DynamicFormActions);
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
  submitResetActionMenuClick(action: ButtonActions) {
    console.log(action);

    if (action === ButtonActions.SUBMIT) {
      console.log('inside submit');
      console.log(this.mode);
      console.log(DynamicFormActions.UPDATE);
      let a: DynamicFormActions = action;
      console.log(a);
      
      switch (this.mode) {
        case DynamicFormActions.CREATE:
        this.userRoleService.create(this.model).subscribe(data => {
          this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
        });
        break;
        case DynamicFormActions.UPDATE:
        this.userRoleService.update(this.model).subscribe(data => {
          this.messageService.add({severity: 'success', summary: 'Saved successfully', detail: 'Successfully updated'});
        });
        break;
        default:
        console.log('default .....');
        break;
      }
    }
  }
}
