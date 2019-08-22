import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';
import data from '../../moviePreferenceStats.js'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Series 1' },
  ];

  constructor() { }

  ngOnInit() {
    const sample = data
    for (const movieData of data) {
      this.barChartLabels.push(movieData.movie)
      const barChartData = this.barChartData
      const series = barChartData[0]
      const seriesData = series.data
      this.barChartData[0].data.push(movieData.likes)
    }
  }

}
