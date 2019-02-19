import {Component, OnDestroy, ComponentFactoryResolver, OnInit} from '@angular/core';
import { navItems } from './../../_nav';
import { AuthService, MenuItem } from '../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { select } from '@angular-redux/store';

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
    private router: Router) {
    this.changes = new MutationObserver(() => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: [ 'class' ]
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
  onDeactivate(event: any) {}
  onActivate() {}
}
