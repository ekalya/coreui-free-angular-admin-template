import {Component, OnDestroy, ComponentFactoryResolver, Input} from '@angular/core';
import { navItems } from './../../_nav';
import { AuthService, MenuService, MenuItem } from '../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, Subject } from 'rxjs';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public activatedRoute: ActivatedRoute;
  public componentFactoryResolver: ComponentFactoryResolver;
  public menuItems = this.menuService.getMenu();
  constructor(private authService: AuthService,
    private router: Router,
    private menuService: MenuService) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: [ 'class' ]
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  onDeactivate() {
    this.menuService.sendMenu([]);
  }
  menuClick(menuItem: MenuItem) {
    console.log(menuItem.name);
    menuItem.action.emit(menuItem.name);
  }
}
