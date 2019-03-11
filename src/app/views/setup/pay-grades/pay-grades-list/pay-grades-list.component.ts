import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmploymentStatus, InputControlBase, GenericComponent, PayGrade } from '../../../../core/models';
import { PayGradeService } from '../../../../core/services';
import { PayGradeUIService } from '../pay-grade-detail/pay-grade-ui.service';

@Component({
  selector: 'app-pay-grades-list',
  templateUrl: './pay-grades-list.component.html',
  styleUrls: ['./pay-grades-list.component.scss'],
  providers: [MessageService]
})
export class PayGradesListComponent extends GenericComponent<PayGrade> implements OnInit {
  constructor(
    private payGradeService: PayGradeService,
    private payGradeUIService: PayGradeUIService,
    private messageService: MessageService) {
      super(payGradeService, messageService, payGradeUIService);
      this.title = 'Pay Grades List';
    }

  ngOnInit() {
    this.payGradeService.getAll().subscribe(data => {
      this.listItems = data;
    });
  }
  itemSelectedChangeEvent(selectedItem: EmploymentStatus) {
    this.selectedItem = selectedItem;
  }
  itemUpdatedEvent(updatedItem: EmploymentStatus) {
    this.updateItem(updatedItem);
  }
  itemAddedEvent(addedItem: EmploymentStatus) {
    this.addItem(addedItem);
  }
  itemDeleteEvent(item: EmploymentStatus) {
    this.messageService.add({severity: 'error', summary: 'Not allowed', detail: 'Not allowed'});
  }

}
