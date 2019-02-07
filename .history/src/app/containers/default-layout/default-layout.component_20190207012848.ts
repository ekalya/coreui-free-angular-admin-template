import {Component, OnDestroy, ComponentFactoryResolver, Input, OnInit} from '@angular/core';
import { navItems } from './../../_nav';
import { AuthService, MenuService, MenuItem, User } from '../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, Subject } from 'rxjs';
import { EventEmitter } from 'protractor';
import { select } from '@angular-redux/store';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public activatedRoute: ActivatedRoute;
  public componentFactoryResolver: ComponentFactoryResolver;
  private subject = new Subject<MenuItem[]>();
  public menuItems = this.subject.asObservable();
  @select() menuItems$: Observable<MenuItem[]>;

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


    this.menuItems$.subscribe((items: MenuItem[]) => {
      console.log('menu items arrived ..................' + items);
      try
      {
       this.subject.next(items['menuItems']);
       items['menuItems'].forEach(item => {
         console.log(item);
       });

      }
      catch(error)
      {
       console.log(error);
      }

   });

  }

  ngOnInit(): void {}

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
