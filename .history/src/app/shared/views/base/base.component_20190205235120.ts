import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuService } from '../../../core';

@Component({
  selector: 'app-base',
  templateUrl: '<div>loading...</div>',
  styleUrls: []
})
export class BaseComponent implements OnInit {
  protected menuItems: MenuItem[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
   this.menuService.sendMenu(this.menuItems);
  }

}
