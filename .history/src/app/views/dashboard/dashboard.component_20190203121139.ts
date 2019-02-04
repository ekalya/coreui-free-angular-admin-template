import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { DateFormatPipe, DailyTransactionCounts, PaymentConfirmationService } from '../../core';
import * as moment from 'moment';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  // mainChart
  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData3: Array<number> = [];
  public mainChartTransactions: Array<DailyTransactionCounts> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];

  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = [];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(50 / 5),
          max: 50
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  constructor(private _dateFormatPipe: DateFormatPipe,
    private paymentConfirmationService: PaymentConfirmationService) {}
  ngOnInit(): void {
    this.paymentConfirmationService.getDailyTransactionsCount('dailyTransactions').subscribe(data => {
      data.dailyPaymentConfirmation.filter(
        r => (moment(r.date).toDate() >= moment().subtract(this.mainChartElements, 'days').toDate()) === true)
        .sort((a, b) =>  new Date(a.date).getTime() - new Date(b.date).getTime() ).forEach(dt => {
          this.mainChartData1.push(dt.count);
          this.mainChartLabels.push(moment(dt.date).format('ddd'));
      });
    });
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData3.push(5);
    }
  }
}
