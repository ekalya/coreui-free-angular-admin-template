import { Component, OnInit, OnDestroy } from '@angular/core';
import { Branch, BranchesService } from '../../../core';
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
  constructor(private branchesService: BranchesService) { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.branchesService.getAll().subscribe(data => {
      console.log(data);
      this.branches = data;
      this.dtTrigger.next(this.branches);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
