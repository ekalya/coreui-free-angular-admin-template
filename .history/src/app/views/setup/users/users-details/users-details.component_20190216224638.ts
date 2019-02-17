import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { User, UserService } from '../../../../core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  userFormMetadata: any[];
  @Input() public model: User = new User();
  modelEmitter: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserService,
    private userMetadataService: UserDetailsUIService,
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.userFormMetadata = this.userMetadataService.getMetadata();

    const json = this.route.snapshot.queryParams['user'];
    this.mode = this.route.snapshot.queryParams['mode'];
    if (json === JSON.stringify({})) {
      this.branch = new Branch();
    } else {
      this.branch = JSON.parse(json);
    }

    this.modelEmitter.emit(this.model);
  }

  formValues(form: FormGroup) {
    this.model.username = form.value.username;
    /* this.userService.update(this.model).subscribe( () => {
    }); */
  }
}
