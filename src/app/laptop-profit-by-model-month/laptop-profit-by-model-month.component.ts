import { Component, OnInit } from '@angular/core';
import data from '../../multiYearLaptopSales.js';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';


@Component({
  selector: 'app-laptop-profit-by-model-month',
  templateUrl: './laptop-profit-by-model-month.component.html',
  styleUrls: ['./laptop-profit-by-model-month.component.css']
})
export class LaptopProfitByModelMonthComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    let salesData = data
    let tempDataStore = {}

    for(let transaction of salesData){
      const year = transaction.yearSold
      const model = transaction.model
      
      var date = new Date(transaction.transactionDate);
      var month = date.getMonth();
      const cvmonth = date.toLocaleString('default', { month: 'long' });
      var MonthYear = cvmonth+'-'+year
      //console.log(MonthYear)

      const profit = transaction.salesPrice - transaction.cost
     
      if(tempDataStore[MonthYear]){
        if(tempDataStore[MonthYear][model]){
          // if model is found increase count by one
          tempDataStore[MonthYear][model] += profit
          console.log([MonthYear][model])
        } else {
          // if model not found in year, set as 1
          tempDataStore[MonthYear][model] = profit
        }
      } else {
        // create an empty object for that year and set count for model as 1
        tempDataStore[MonthYear] = {}
        tempDataStore[MonthYear][model] = profit
      }
    }

    let modelProfitCount = {}

    for(const MonthYear in tempDataStore){
      this.barChartLabels.push(MonthYear)
      for(let model in tempDataStore[MonthYear]){
        if(modelProfitCount[model]){
          modelProfitCount[model].push(tempDataStore[MonthYear][model])
        } else {
          modelProfitCount[model]= [tempDataStore[MonthYear][model]]
        }
      }
    }

    for(let model in modelProfitCount){
      this.barChartData.push(
        {data: modelProfitCount[model], label: model}
      )
    }

  }

}
