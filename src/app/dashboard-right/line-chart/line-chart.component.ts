import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DashboardRightService } from '../dashboard-right.service';
import { ChartComponent } from 'ng-apexcharts';
import { columnChartOptions } from './line-chart-model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() dashboardObj : any;
  constructor(public dashboardService : DashboardRightService) {
    this.chartOptions = {
      series: [
        {
          name: "Income",
          data: [44, 55, 41, 67]
        },
        {
          name: "Borrow",
          data: [13, 23, 20, 8]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
        ]
      },
      title: {
        text: "Balance Overview",
        align: "left"
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
   }

  ngOnInit(): void {
  }
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<columnChartOptions>;
}
