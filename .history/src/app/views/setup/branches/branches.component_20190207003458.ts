import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Branch, BranchesService, MenuService, MenuItem } from '../../../core';
import { Subject } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { SET_MENU } from '../../../store/actions/menu-items';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit, OnDestroy {
  branches: Branch[] = [];
  dtTrigger: Subject<Branch[]> = new Subject<Branch[]>();
  dtOptions: DataTables.Settings = {};
  private createMenuClick: EventEmitter<any> = new EventEmitter<any>();
  private menuItems: MenuItem[];
  constructor(private branchesService: BranchesService,
    private menuService: MenuService,
    private ngRedux: NgRedux<any>) {
    this.createMenuClick.subscribe((event) => {
      console.log('menu item click.....' + event);
    });
     this.setMenu();
  }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.branchesService.getAll().subscribe(data => {
      this.branches = data;
      this.dtTrigger.next(this.branches);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  setMenu() {
    this.menuItems = [{name: 'Create', action: this.createMenuClick}, {name: 'Create', action: this.createMenuClick}];
    this.menuService.sendMenu(this.menuItems);
    this.ngRedux.dispatch({type: SET_MENU, payload: this.menuItems});
    console.log(this.ngRedux.getState());

  }

}
