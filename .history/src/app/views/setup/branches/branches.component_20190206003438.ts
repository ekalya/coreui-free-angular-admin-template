import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Branch, BranchesService, MenuService, MenuItem } from '../../../core';
import { Subject } from 'rxjs';

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

  constructor(private branchesService: BranchesService,
    private menuService: MenuService) {
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
    this.menuService.sendMenu([
      new MenuItem('Create', this.createMenuClick),
      new MenuItem('Details', this.createMenuClick),
      new MenuItem('Edit', this.createMenuClick),
      new MenuItem('Delete', this.createMenuClick)]);
  }

}
