import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  lineChart = 'myLineChart';
  myLineChart;
  userInfo;
  birinciAralik = 0;
  ikinciAralik = 0;
  ucuncuAralik = 0;
  donduncuAralik = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.userInfo = this.dataService.userDatas;
    this.userInfo.find((findedItem) => {
      if (findedItem.age <= 18) {
       this.birinciAralik ++;
      }
      else if (findedItem.age > 19 && findedItem.age <= 30) {
        this.ikinciAralik ++;
      }

      else if (findedItem.age >30 && findedItem.age <=65) {
        this.ucuncuAralik++;
      }
      else if (findedItem.age> 65) {
        this.donduncuAralik;
      }

    })


    this.myLineChart = new Chart(this.lineChart, {
      type: 'line',
      data: {
          labels: ['0-18', '19-30', '30-65', '65+'],
          datasets: [{
              label: 'Yaş',
              data: [this.birinciAralik,this.ikinciAralik,this.ucuncuAralik,this.donduncuAralik],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
    
  }

}
