import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LaptopSalesComponent } from './laptop-sales/laptop-sales.component';
import { MovieComponent } from './movie/movie.component';
import { MoviePreferComponent } from './movie-prefer/movie-prefer.component';
import { MovieComplicatedComponent } from './movie-complicated/movie-complicated.component';
import { LaptopSalesByYearModelComponent } from './laptop-sales-by-year-model/laptop-sales-by-year-model.component';
import { LaptopProfitByModelMonthComponent } from './laptop-profit-by-model-month/laptop-profit-by-model-month.component';

const routes: Routes = [
  {path: "line-chart", component: LineChartComponent},
  {path: "bar-chart", component: BarChartComponent},
  {path: "pie-chart", component: PieChartComponent},
  {path: "laptop-sales", component: LaptopSalesComponent},
  {path: "movies", component: MovieComponent},
  {path: "movieprefer", component: MoviePreferComponent},
  {path: "moviecomplicated", component: MovieComplicatedComponent},
  {path: "laptopsales", component: LaptopSalesByYearModelComponent},
  {path: "laptopprofit", component: LaptopProfitByModelMonthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
