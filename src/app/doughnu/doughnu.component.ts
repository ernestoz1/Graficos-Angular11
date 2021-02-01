import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnu',
  templateUrl: './doughnu.component.html',
  styleUrls: ['./doughnu.component.css']
})
export class DoughnuComponent implements OnInit {
  
  doughnuLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnuData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnuType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
