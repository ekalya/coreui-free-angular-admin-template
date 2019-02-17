import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { User } from '../../../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  userFormMetadata: any[];
  @Input() public model: User = new User();
  modelEmitter: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userMetadataService: UserDetailsUIService) {
  }


  ngOnInit() {
    this.userFormMetadata = this.userMetadataService.getMetadata();
    this.modelEmitter.emit(this.model);
  }

  formValues(form: FormGroup) {
    this.model.username = form.value.name;
    this.model.physicalAddress = form.value.physicalAddress;
    this.companyService.update(this.model).subscribe( () => {
    });
  }
}
