import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import * as moment from 'moment';
import { DailyTransactionCounts, PaymentConfirmationService } from '../../core';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  // mainChart
  isDataAvailable: boolean;
  isDataAvailable2: boolean;
  public mainChartElements = 30;
  public mainChartData1: Array<number> = [];
  public mainChartTransactions: Array<DailyTransactionCounts> = [];

  public mainChartDataTotals1: Array<number> = [];
  public mainChartTransactionTotals: Array<DailyTransactionCounts> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    }
  ];

  public mainChartDataTotals: Array<any> = [
    {
      data: this.mainChartDataTotals1,
      label: 'Current'
    }
  ];

  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = [];
  public mainChartLabelsTotals: Array<any> = [];
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
  public mainChartOptions2: any = {
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
          maxTicksLimit: 20,
          stepSize: Math.ceil(20000 / 20),
          max: 20000
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
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  public sumTotals: number;
  public sumCount: number;
  public cardTitle1: string;
  public cardTitle2: string;

  constructor(
    private paymentConfirmationService: PaymentConfirmationService) {}
  ngOnInit(): void {
    this.isDataAvailable = false;
    this.isDataAvailable2 = false;
    this.cardTitle1 = 'Daily Transactions Count';
    this.cardTitle2 = 'Daily Transactions Totals';
    this.sumCount = 0;
    this.sumTotals = 0;
    this.paymentConfirmationService.getDailyTransactionsCount('dailyTransactions').subscribe(data => {
      data.dailyPaymentConfirmation.filter(
        r => (moment(r.date).toDate() >= moment().subtract(this.mainChartElements, 'days').toDate()) === true)
        .sort((a, b) =>  new Date(a.date).getTime() - new Date(b.date).getTime() ).forEach(dt => {
          this.mainChartData1.push(dt.count);
          this.mainChartLabels.push(moment(dt.date).format('ddd'));
          this.sumCount = this.sumCount + dt.count;
          this.isDataAvailable = true;
      });
    });

    this.paymentConfirmationService.getDailyTransactionTotals('dailyTransactionTotals').subscribe(data => {
      data.dailyPaymentConfirmation.filter(
        r => (moment(r.date).toDate() >= moment().subtract(this.mainChartElements, 'days').toDate()) === true)
        .sort((a, b) =>  new Date(a.date).getTime() - new Date(b.date).getTime() ).forEach(dt => {
          this.mainChartDataTotals1.push(dt.total);
          this.mainChartLabelsTotals.push(moment(dt.date).format('ddd'));
          this.sumTotals = this.sumTotals + dt.total;
          this.isDataAvailable2 = true;
      });
    });
  }
}
