import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  weatherData: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
  alert('APP IS RUNNING');
  console.log('App initialized - calling API...');

    this.api.getWeather().subscribe({
      next: (data) => {
        console.log('API RESPONSE:', data);
        this.weatherData = data;
      },
      error: (err) => {
        console.error('API ERROR:', err);
      }
    });

  }
}