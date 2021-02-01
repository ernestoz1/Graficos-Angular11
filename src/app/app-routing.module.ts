import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnuComponent } from './doughnu/doughnu.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'line-chart' },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'doughnu', component: DoughnuComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'bubble-chart', component: BubbleChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
