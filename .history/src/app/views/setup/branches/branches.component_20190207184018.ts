import { Component, OnInit, OnDestroy } from '@angular/core';
import { Branch, BranchesService } from '../../../core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit, OnDestroy {
  branches: Branch[] = [];
  dtTrigger: Subject<boolean> = new Subject<boolean>();
  dtOptions: DataTables.Settings = {};
  constructor(private branchesService: BranchesService,
    private router: Router) {
  }

  ngOnInit() {
    console.log('On Init ............branch')
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.branchesService.getAll().subscribe(data => {
      this.branches = data;
      this.dtTrigger.next(true);
    });
  }

  ngOnDestroy(): void {
    console.log('On destory ............branch')
    this.dtTrigger.unsubscribe();
  }

  actionMenuClick(action: string) {
    console.log(action);
    if(action === 'CREATE'){
    
    }
  }

}
