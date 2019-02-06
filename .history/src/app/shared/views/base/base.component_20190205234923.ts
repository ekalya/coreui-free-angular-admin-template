import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../core';

@Component({
  selector: 'app-base',
  templateUrl: '<div>loading...</div>',
  styleUrls: []
})
export class BaseComponent implements OnInit {
  protected menuItems: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
