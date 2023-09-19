import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // city: string = '';
  // weatherData: any;

  city = 'Johannesburg'; // Default city
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();

  }  
  
  // getWeather() {
  //   if (this.city.trim() !== '') {
  //     this.weatherService.getWeather(this.city).subscribe(
  //       (data: any) => {
  //         this.weatherData = data;
  //       },
  //       (error: any) => {
  //         console.error('Error fetching weather data:', error);
  //         // Display a user-friendly error message to the user
  //         // You can set a property to show an error message in your template.
  //       }
  //     );
  //   }
  // }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      this.weatherData = data;
      console.log(this.weatherData);
      
    });
  }



}
