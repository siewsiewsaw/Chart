import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LaptopSalesComponent } from './laptop-sales/laptop-sales.component';
import { MovieComponent } from './movie/movie.component';
import { MoviePreferComponent } from './movie-prefer/movie-prefer.component';
import { MovieComplicatedComponent } from './movie-complicated/movie-complicated.component';
import { LaptopSalesByYearModelComponent } from './laptop-sales-by-year-model/laptop-sales-by-year-model.component';
import { LaptopProfitByModelMonthComponent } from './laptop-profit-by-model-month/laptop-profit-by-model-month.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    LaptopSalesComponent,
    MovieComponent,
    MoviePreferComponent,
    MovieComplicatedComponent,
    LaptopSalesByYearModelComponent,
    LaptopProfitByModelMonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
