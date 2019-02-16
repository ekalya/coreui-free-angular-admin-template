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
    console.log(formGroup.value);
    this.branch.name = formGroup.value.name;
    this.branch.physicalLocation = formGroup.value.physicalLocation;
    this.branch.telephone = formGroup.value.telephone;
    this.tillNumbers.forEach(tn => {
      console.log('new tn:' + tn.number);
       this.branch.tillNumbers.forEach(etn => {
         console.log('etn:' + etn.number + ' id:' + etn.id);
          if (etn.number === tn.number) {
            tn.id = etn.id;
          }
       });
    });
    this.tillNumbers.forEach(ntn => {
      console.log(JSON.stringify(ntn));
    });
    //this.branch.tillNumbers = this.tillNumbers;
    console.log( JSON.stringify(this.branch));

    console.log('save: ' + JSON.stringify(this.branch));
    /*this.branchService.create(this.branch).subscribe(response => {
      console.log('response......');
      console.log(response);
    });*/


  }
  listItemsEmitter(listItems: Array<ListItem>) {
    console.log('branch::');
    this.tillNumbers = [];
    listItems.forEach(item => {
      this.branch.tillNumbers.forEach(etn => {
        console.log('etn:' + etn.number + ' id:' + etn.id);
         if (etn.number === item.description) {
           item.id = etn.id;
         }
      });
      console.log(item.description);
      this.tillNumbers.push(new TillNumber(item.id, item.description));
    });
  }

}
