import { Component, OnInit } from '@angular/core';
import data from '../../multiYearLaptopSales.js'
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-laptop-sales-by-year-model',
  templateUrl: './laptop-sales-by-year-model.component.html',
  styleUrls: ['./laptop-sales-by-year-model.component.css']
})
export class LaptopSalesByYearModelComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    // { data: [2000, 1500, 1000], label: 'XPS' },
  ];

  constructor() { }

  ngOnInit() {
    let salesData = data
    let tempDataStore = {}

    for(let transaction of salesData){
      const year = transaction.yearSold
      const model = transaction.model

      if(tempDataStore[year]){
        if(tempDataStore[year][model]){
          // if model is found increase count by one
          tempDataStore[year][model] += 1
        } else {
          // if model not found in year, set as 1
          tempDataStore[year][model] = 1
        }
      } else {
        // create an empty object for that year and set count for model as 1
        tempDataStore[year] = {}
        tempDataStore[year][model] = 1
      }
    }

    let modelSalesCount = {}

    for(const year in tempDataStore){
      this.barChartLabels.push(year)
      for(let model in tempDataStore[year]){
        if(modelSalesCount[model]){
          modelSalesCount[model].push(tempDataStore[year][model])
        } else {
          modelSalesCount[model]= [tempDataStore[year][model]]
        }
      }
    }

    for(let model in modelSalesCount){
      this.barChartData.push(
        {data: modelSalesCount[model], label: model}
      )
    }

  }

}
