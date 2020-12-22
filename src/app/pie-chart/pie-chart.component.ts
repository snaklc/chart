import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  userInfo;
  pieChart = 'myPieChart';
  myPieChart;



  constructor(private dataService: DataService) { }

  iphoneCounter = 0;
  samsungCounter = 0;
  xianomiCounter = 0;
  sonyCounter = 0;
  

  ngOnInit(): void {
  
  this.userInfo = this.dataService.userDatas;
    this.userInfo.find((findedItem) => {
      if (findedItem.phone.company === "Iphone") {
        this.iphoneCounter++;
      }
      else if (findedItem.phone.company === "Samsung") {
        this.samsungCounter++
      }

      else if (findedItem.phone.company === "Xiaomi") {
        this.xianomiCounter++
      }
      else if (findedItem.phone.company === "Sonny") {
        this.sonyCounter++
      }

    })


    this.myPieChart = new Chart(this.pieChart, {
      type: 'pie',
      data: {
          labels: ['Iphone', 'Samsung', 'Xiaomi', 'Sony'],
          datasets: [{
              label: '# of Votes',
              data: [this.iphoneCounter, this.samsungCounter, this.xianomiCounter, this.sonyCounter],
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
