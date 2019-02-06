import {Component, OnDestroy} from '@angular/core';
import { navItems } from './../../_nav';
import { AuthService, CrumAction, CrumActionsService } from '../../core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public crumActions: CrumAction[];
  subscription: Subscription;
  constructor(private authService: AuthService,
    private router: Router,
    private crumActionsService: CrumActionsService) {

    this.subscription = this.crumActionsService.getActions().subscribe(actions: CrumAction[] => 
      { 
        this.crumActions = actions; 
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
  }
  logout() {
    this.authService.logout().subscribe(() => {
      console.log('logged out');
      this.router.navigate(['/login']);
    });
  }
}
