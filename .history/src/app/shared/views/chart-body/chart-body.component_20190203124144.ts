import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-body',
  templateUrl: './chart-body.component.html',
  styleUrls: ['./chart-body.component.scss']
})
export class ChartBodyComponent implements OnInit {
  @Input() public mainChartData: Array<any>;
  @Input() public mainChartLabels: Array<any>;
  @Input() public mainChartLabelsTotals: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
