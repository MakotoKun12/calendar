import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  highlightedDates = {
    enero: [
      {
        date: "2024-01-22",
        textColor: '#gray',
        backgroundColor: '#87A922'
      },
      {
        date: '2024-01-23',
        textColor: '#gray',
        backgroundColor: '#87A922'
      },
      {
        date: '2024-01-24',
        textColor: '#gray',
        backgroundColor: '#87A922'
      },
      {
        date: '2024-01-29',
        textColor: '#gray',
        backgroundColor: '#BFEA7C'
      }
    ],
    febrero: [
      {
        date: '2024-02-01',
        textColor: '#gray',
        backgroundColor: '#D37676'
      },
      {
        date: '2024-02-02',
        textColor: '#gray',
        backgroundColor: '#D37676'
      },
      {
        date: '2024-02-05',
        textColor: '#gray',
        backgroundColor: '#50727B'
      },
      {
        date: '2024-02-09',
        textColor: '#gray',
        backgroundColor: '#FF8E8F'
      }
    ],
    marzo: [
      {
        date: '2024-03-18',
        textColor: '#gray',
        backgroundColor: '#50727B'
      },
      {
        date: '2024-03-25',
        textColor: '#gray',
        backgroundColor: '#76ABAE'
      },
      {
        date: '2024-03-26',
        textColor: '#gray',
        backgroundColor: '#76ABAE'
      },
      {
        date: '2024-03-27',
        textColor: '#gray',
        backgroundColor: '#76ABAE'
      },
      {
        date: '2024-03-28',
        textColor: '#gray',
        backgroundColor: '#76ABAE'
      },
      {
        date: '2024-03-29',
        textColor: '#gray',
        backgroundColor: '#76ABAE'
      },
    ],
    abril: [
      {
        date: '2024-04-01',
        textColor: '#gray',
        backgroundColor: '#87A922'
      },
      {
        date: '2024-04-02',
        textColor: '#gray',
        backgroundColor: '#87A922'
      },
      {
        date: '2024-04-03',
        textColor: '#gray',
        backgroundColor: '#87A922'
      },
      {
        date: '2024-04-04',
        textColor: '#gray',
        backgroundColor: '#87A922'
      },
      {
        date: '2024-04-05',
        textColor: '#gray',
        backgroundColor: '#87A922'
      },
      {
        date: '2024-04-19',
        textColor: '#gray',
        backgroundColor: '#FCDC2A'
      },
    ],
    mayo: [
      {
        date: '2024-05-01',
        textColor: '#gray',
        backgroundColor: '#50727B'
      },
      {
        date: '2024-05-15',
        textColor: '#gray',
        backgroundColor: '#50727B'
      },
      {
        date: '2024-05-31',
        textColor: '#gray',
        backgroundColor: '#D37676'
      },
    ],
    junio: [
      {
        date: '2024-06-24',
        textColor: '#gray',
        backgroundColor: '#EBC49F'
      },
      {
        date: '2024-06-25',
        textColor: '#gray',
        backgroundColor: '#EBC49F'
      },
      {
        date: '2024-06-26',
        textColor: '#gray',
        backgroundColor: '#EBC49F'
      },
      {
        date: '2024-06-27',
        textColor: '#gray',
        backgroundColor: '#EBC49F'
      },
      {
        date: '2024-06-28',
        textColor: '#gray',
        backgroundColor: '#EBC49F'
      },
    ]
  }
}
