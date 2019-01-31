import { Component } from '@angular/core';
import { AlertService } from '../../core';


@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  constructor(private alertService: AlertService) {
    this.alertService.error('Test Error.....');
   }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
