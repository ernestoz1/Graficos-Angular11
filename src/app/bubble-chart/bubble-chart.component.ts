import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 200,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 200,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartColors;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 150, y: 100, r: 15 },
        { x: 125, y: 150, r: 25 },
        { x: 36, y: 120, r: 33 },
        { x: 100, y: 160, r: 16 },
        { x: 22, y: 170, r: 17 },
        { x: 90, y: 190, r: 14 },
        { x: 20, y: 32, r: 10 },
        { x: 60, y: 43, r: 12 },
        { x: 55, y: 60, r: 17 },
      ],
      label: 'Investment Equities',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
