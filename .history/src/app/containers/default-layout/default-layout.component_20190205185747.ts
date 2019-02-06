import {Component, OnDestroy} from '@angular/core';
import { navItems } from './../../_nav';
import { AuthService, CrumAction, CrumActionsService } from '../../core';
import { Router } from '@angular/router';
import { Subscription, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  
  public crumActions: Observable<CrumAction[]>;
  private subject = new Subject<CrumAction[]>();
  subscription: Subscription;

  constructor(private authService: AuthService,
    private router: Router,
    private crumActionsService: CrumActionsService) {
    this.subscription = this.crumActionsService.getActions().subscribe(actions => {
        this.subject.next(actions);
        this.crumActions = this.subject.asObservable();
      });


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
    this.subscription.unsubscribe();
  }
  logout() {
    this.authService.logout().subscribe(() => {
      console.log('logged out');
      this.router.navigate(['/login']);
    });
  }
}
