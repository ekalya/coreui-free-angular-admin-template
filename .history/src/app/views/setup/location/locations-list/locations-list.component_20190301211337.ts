import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../core/models';
import { LocationUIService } from '../location-details/location-ui.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss'],
  providers: [MessageService]
})
export class LocationsListComponent implements OnInit {
  controls: InputControlBase<any>[] = [];
  dynamicFormsBridge: DynamicFormsBridge = new DynamicFormsBridge();
  form: FormGroup;
  model: Location = new Location();
  listItems: Location[] = [];
  cols: any[] = [];
  title: string;
  selectedLocation = new Location();
  showCurrencyForm: boolean;
  action: string;
  constructor(private locationService: LocationService,
    private locationUIService: LocationUIService,
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
    if (updatedCurrency.isBaseCurrency === false) {
      updatedCurrency.isBaseCurrency = null;
    }
    if (updatedCurrency.id === undefined) {
      this.currencyService.create(updatedCurrency).subscribe(curr => {
        this.listItems.push(curr);
      });
    } else {
      this.currencyService.update(updatedCurrency).subscribe(curr => {
        listItems[this.listItems.indexOf(this.selectedCurrency)] = curr;
        /* If the newly updated currency is flagged base, flag off the other base currs */
        if (updatedCurrency.isBaseCurrency === true) {
          listItems.filter( cur => (cur.code !== updatedCurrency.code &&  cur.isBaseCurrency === true)).forEach( existingBase => {
            existingBase.isBaseCurrency = false;
          });
        }
      });
    }
    this.listItems = listItems;
  }
  currencySelectedItemChange(selectedCurrency: Currency) {
    this.selectedCurrency = selectedCurrency;
  }
}
