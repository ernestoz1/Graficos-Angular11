import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
barChartLabels: Label[] = [
    'Apple',
    'Banana',
    'Kiwifruit',
    'Blueberry',
    'Coconout',
    'Pineaple',
    'Orange',
    'Grapes',
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{ 
    data: [
      45, 27, 60, 70, 35, 50, 120, 90
    ],
    backgroundColor:[
      ('#1f77b4'),
      ('#ffe135'),
      ('#90C825'),
      ('#4F86F7'),
      ('#FFFAF0'),
      ('#FFE12D'),
      ('#FA5B3C'),
      ('#6f2da8'),
    ], 
    label: 'Best Fruits' }, 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
