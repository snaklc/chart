import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot([
      {path: 'bar-chart', component: BarChartComponent},
      {path: 'line-chart', component: LineChartComponent},
      {path: 'pie-chart', component: PieChartComponent},
      {path: '**', component: BarChartComponent }
    ])

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
