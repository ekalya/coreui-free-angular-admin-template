import { Component, OnInit } from '@angular/core';
import { MessageService, MenuItem } from 'primeng/api';
import { TestUIService} from './test-ui.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
  providers:  [TestUIService, MessageService ],
})
export class TestPageComponent implements OnInit {
  items: MenuItem[];
  title = 'angularForms';
  controls: any[];

  ngOnInit(): void {
    this.items = [
      {label: 'Update', icon: 'fa fa-fw fa-refresh', command: () => {
          this.update();
      }},
      {label: 'Delete', icon: 'fa fa-fw fa-close', command: () => {
          this.delete();
      }}
  ];
  }

  constructor(service: TestUIService, private messageService: MessageService) {
    this.controls = service.getUIControls();
  }
  save() {
    this.messageService.add({severity: 'info', summary:'Success', detail:'Data Saved'});
}

update() {
    this.messageService.add({severity: 'info', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity: 'info', summary:'Success', detail:'Data Deleted'});
}
dynamicFormValues(form: FormGroup) {
  console.log(form.value);
}
}
