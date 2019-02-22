import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  items: MenuItem[];
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
  title = 'angularForms';
  controls: any[];
 
  constructor(service: TestUIService, private messageService: MessageService) {
    this.controls = service.getUIControls();
  }
  save() {
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Saved'});
}

update() {
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Updated'});
}

delete() {
    this.messageService.add({severity:'info', summary:'Success', detail:'Data Deleted'});
}
}
