import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {single, multi} from 'app/components/charts/charts.data';

@Component({
  selector: 'app-charts',
  styleUrls: ['./charts.component.css'],
  template: `
    <ngx-charts-pie-grid
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      (select)="onSelect($event)">
    </ngx-charts-pie-grid>
  `
})
export class ChartsComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

   // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  constructor() {
    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }
}

