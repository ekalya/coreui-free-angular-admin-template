import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ListItem, Branch, TillNumber, BranchesService } from '../../../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  branch: Branch = new Branch();
  tillNumbers: Array<TillNumber> = [];
  constructor(private branchService: BranchesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const json = this.route.snapshot.queryParams['branch'];
    this.branch = JSON.parse(json);
    console.log('branch at Branch component');
    console.log(JSON.stringify(this.branch));
  }

  OnSubmit(formGroup: FormGroup) {
    console.log('submit form.....');
    this.branch.name = formGroup.value.name;
    this.branch.physicalLocation = formGroup.value.physicalLocation;
    this.branch.telephone = formGroup.value.telephone;
    this.branch.tillNumbers = this.tillNumbers;
    this.branchService.create(this.branch).subscribe(response => {
      console.log('response......');
      console.log(response);
    });


  }
  listItemsEmitter(listItems: Array<ListItem>) {
    this.tillNumbers = [];
    listItems.forEach(item => {
      this.branch.tillNumbers.forEach(etn => {
         if (etn.number === item.description) {
           item.id = etn.id;
         }
      });
      this.tillNumbers.push(new TillNumber(item.id, item.description));
    });
  }

}
