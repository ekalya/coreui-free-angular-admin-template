import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputControlBase, Position, PositionService, JobService, Job } from '../../../../core';
import { MessageService } from 'primeng/api';
import { PositionUIService } from './position-ui.service';
import { JobUIService } from '../../jobs/job-details/job-ui.service';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.scss'],
  providers: [MessageService]
})
export class PositionDetailsComponent implements OnInit, OnChanges {
  @Output() public formCloseEvent: EventEmitter<any> = new EventEmitter<any>();
  /* position */
  form: FormGroup;
  controls: InputControlBase<any>[] = [];
  @Input() public model: Position;
  @Input() public positions: Position[] = [];
  newItem: Position = new Position();
  @Input() public menuAction: any;
  hideSaveButton: boolean;
  hideCloseButton: boolean;

  /* Job */
  displayJobsList: boolean;
  jobs_list_title: string;
  jobs: Job[];
  jobsColumns: any[];
  jobName: string;

  constructor(
    private positionService: PositionService,
    private messageService: MessageService,
    private positionUIService: PositionUIService,
    private jobService: JobService,
    private jobUIService: JobUIService) {
      this.controls = this.positionUIService.getMetadata();
      this.hideSaveButton = true;
      this.hideCloseButton = true;
      this.jobs_list_title = 'Select job';
    }

  ngOnInit() {
    this.jobService.getAll().subscribe(data => {
      this.jobs = data;
    });
    this.jobsColumns = this.jobUIService.getColumns();
  }
  ngOnChanges() {
    this.displayValues();
  }
  formEmitterEvent(form: FormGroup) {
  this.form = form;
  }
  actionMenuClickEvent(event) {
    console.log(this.menuAction);
    this.model.name = this.form.value.name;
    if (this.menuAction.action === 'CREATE') {
      this.positionService.update(this.model).subscribe(data => {
        this.positions.push(data);
        this.messageService.add({severity: 'success', summary: 'Created successfully', detail: 'Successfully Created'});
      });
    } else if (this.menuAction.action === 'UPDATE') {
        this.positionService.update(this.model).subscribe(data => {
          this.messageService.add({severity: 'success', summary: 'Updated successfully', detail: 'Successfully Updated'});
        });
    }
  }
  closeFormEventEmitter(event) {
   this.formCloseEvent.emit(event);
  }
  displayValues() {
    if (this.model && this.model.job) {
      this.jobName = this.model.job.name;
    }
    if (this.form && this.model) {
      this.form.patchValue(this.model);
    }

  }
  /* Job */
  /********************/
  toggleShowLocationsList() {
    this.displayJobsList = !(this.displayJobsList === true);
  }
  itemSelectedItemChange(job: any) {
    this.model.job = job;
    this.jobName = job.name;
  }
  /************************ */
}
