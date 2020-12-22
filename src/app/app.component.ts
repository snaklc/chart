import { DataService } from './data.service';
import { Component } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chart';
  chart = 'myChart';
  myChart;

  constructor(private data: DataService) { }

  ngOnInit() {
  //   console.log(this.data.userDatas);


  //   this.myChart = new Chart(this.chart, {
  //     type: 'bar',
  //     data: {
  //       labels: ['gender', 'salary'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',

  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',

  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });

   }


}
