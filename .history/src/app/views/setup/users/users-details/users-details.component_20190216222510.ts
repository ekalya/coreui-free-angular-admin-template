import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from '../../../../core';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  userFormMetadata: any[];
  model: User = new User();
  modelEmitter: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userMetadataService: UserDetailsUIService) {
  }


  ngOnInit() {
    this.companyFormMetadata = this.companyMetadataService.getMetadata();
    this.companyService.getAll().subscribe((cData: Company[]) => {
      if (cData.length !== 0) {
        this.model = cData[0];
      }
      this.modelEmitter.emit(this.model);
    });
  }

  formValues(form: FormGroup) {
    this.model.name = form.value.name;
    this.model.physicalAddress = form.value.physicalAddress;
    this.companyService.update(this.model).subscribe( () => {
    });
  }
}
