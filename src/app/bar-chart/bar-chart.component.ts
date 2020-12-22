import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  barChart = 'myBarChart';
  myBarChart;
  userInfo;
  birinciAralikKadin = 0;
  ikinciAralikKadin = 0;
  ucuncuAralikKadin = 0;
  dorduncuAralikKadin = 0;
  birinciAralikErkek = 0;
  ikinciAralikErkek= 0;
  ucuncuAralikErkek= 0;
  dorduncuAralikErkek= 0;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.userInfo = this.dataService.userDatas;
    this.userInfo.find((findedItem) => {
      if (findedItem.gender === 'Female' && findedItem.age <= 18) {
        this.birinciAralikKadin = findedItem.phone.sale + this.birinciAralikKadin;
      }
      else if (findedItem.gender === 'Female' && findedItem.age > 19 && findedItem.age <= 30) {
        this.ikinciAralikKadin = findedItem.phone.sale + this.ikinciAralikKadin;

      }

      else if (findedItem.gender === 'Female' && findedItem.age > 30 && findedItem.age <= 65) {
        this.ucuncuAralikKadin = findedItem.phone.sale + this.ucuncuAralikKadin;

      }
      else if (findedItem.gender === 'Female' &&  findedItem.age > 65) {
        this.dorduncuAralikKadin = findedItem.phone.sale + this.dorduncuAralikKadin;

      }
      if (findedItem.gender === 'Male' && findedItem.age <= 18) {
        this.birinciAralikErkek = findedItem.phone.sale + this.birinciAralikErkek;
      }
      else if (findedItem.gender === 'Male' && findedItem.age > 19 && findedItem.age <= 30) {
        this.ikinciAralikErkek = findedItem.phone.sale + this.ikinciAralikErkek;

      }

      else if (findedItem.gender === 'Male' && findedItem.age > 30 && findedItem.age <= 65) {
        this.ucuncuAralikErkek = findedItem.phone.sale + this.ucuncuAralikErkek;

      }
      else if (findedItem.gender === 'Male' &&  findedItem.age > 65) {
        this.dorduncuAralikErkek = findedItem.phone.sale + this.dorduncuAralikErkek;

      }

    })





    this.myBarChart = new Chart(this.barChart, {
      type: 'bar',
      data: {
        labels: ['0-18', '19-30', '30-65', '65+'],
        datasets: [{
          label: 'Erkek',
          data: [this.birinciAralikErkek, this.ikinciAralikErkek, this.ucuncuAralikErkek, this.dorduncuAralikErkek],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',

          ],
          borderColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',

          ],
          borderWidth: 1
        },
        {
          label: 'Kadın',
          data: [this.birinciAralikKadin, this.ikinciAralikKadin, this.ucuncuAralikKadin, this.dorduncuAralikKadin],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',

          ],
          borderWidth: 1
        }
        ]
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
