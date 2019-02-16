import { Component, OnInit } from '@angular/core';
import { BankService } from '../../../../core/services/bank.service';
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {

  constructor(private bankService: BankService) { }

  ngOnInit() {
  }

}
