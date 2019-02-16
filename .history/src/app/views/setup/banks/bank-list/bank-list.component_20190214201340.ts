import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {

  constructor(private bankService: BankService) {
    /*this.bankService.getAll().subscribe(banks => {
      banks.forEach(bank => {
        console.log(bank.name);
      });
    });*/
  }

  ngOnInit() {
  }

}
