import { Component, OnInit } from '@angular/core';
import { Currency, DynamicFormsBridge, TableColumn, InputControlBase } from '../../../../core/models'
import { CurrencyDetailsUIService } from '../currency-details/currency-details-ui.service';
import { CurrencyService, DataSharingService } from '../../../../core/services';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.scss'],
  providers: [MessageService]
})
export class CurrenciesListComponent implements OnInit {
  controls: InputControlBase<any>[] = [];
  dynamicFormsBridge: DynamicFormsBridge = new DynamicFormsBridge();
  form: FormGroup;
  model: Currency = new Currency();
  listItems: Currency[] = [];
  cols: any[] = [];
  title: string;
  selectedCurrency = new Currency();
  showCurrencyForm: boolean;
  action: string;
  constructor(private currencyService: CurrencyService,
    private currencyDetailsUIService: CurrencyDetailsUIService,
    private dataSharingService: DataSharingService) {
    this.controls = this.currencyDetailsUIService.getMetadata();
    this.cols = this.currencyDetailsUIService.getColumns();
    this.title = 'Currencies List';
    this.showCurrencyForm = false;
  }

  ngOnInit() {
    this.currencyService.getAll().subscribe(data => {
      this.listItems = data;
    });
    this.dataSharingService.currentDataSet.subscribe(data => {
    });
    this.dataSharingService.currentActionSet.subscribe(data => {
      this.action = data;
    });
    this.currencyService.selectedCurrency.subscribe((c: Currency) => {
      this.model = c;
    });
  }
  
  itemAddedEvent(addedCurrency: Currency) {
    addedCurrency.isBaseCurrency = null;
    this.currencyService.create(addedCurrency).subscribe(curr => {
      let listItems = [...this.listItems];
      listItems.push(curr);
      this.listItems = listItems;
    })

  }
  itemUpdatedEvent(updatedCurrency: Currency) {
    let listItems = [...this.listItems];
    if(updatedCurrency.isBaseCurrency === false){
      updatedCurrency.isBaseCurrency = null;
    }
    if(updatedCurrency.id === undefined){
      this.currencyService.create(updatedCurrency).subscribe(curr => {
        this.listItems.push(curr);
      });
    } else {
      this.currencyService.update(updatedCurrency).subscribe(curr => {
        listItems[this.listItems.indexOf(this.selectedCurrency)] = curr;
      });
    }
    this.listItems = listItems;
  }
  currencySelectedItemChange(selectedCurrency: Currency) {
    this.selectedCurrency = selectedCurrency;
  }
}
