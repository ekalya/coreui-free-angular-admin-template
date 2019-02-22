import { Component, OnInit, EventEmitter } from '@angular/core';
import { Company, CompanyService } from '../../../core';
import { FormGroup } from '@angular/forms';

import { CompanyUIService } from './company-ui.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [MessageService]
})
export class CompanyComponent implements OnInit {
  companyFormMetadata: any[];
  companies: Company[] = [];
  model: Company = new Company();
  modelEmitter: EventEmitter<Company> = new EventEmitter<Company>();

  constructor(private companyService: CompanyService, private companyMetadataService: CompanyUIService) {
  }


  ngOnInit() {
    this.companyFormMetadata = this.companyMetadataService.getMetadata();
    this.companyService.getAll().subscribe((cData: Company[]) => {
      if (cData.length !== 0) {
        this.model = cData[0];
      }
      this.modelEmitter.emit(this.model);
    });
  }

  formValues(form: FormGroup) {
    this.model.name = form.value.name;
    this.model.physicalAddress = form.value.physicalAddress;
    this.companyService.update(this.model).subscribe( () => {
    });
  }

}
