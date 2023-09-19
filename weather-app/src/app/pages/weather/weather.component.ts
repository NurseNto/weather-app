import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }


  getWeather() {
    if (this.city.trim() !== '') {
      this.weatherService.getWeather(this.city).subscribe(
        (data: any) => {
          this.weatherData = data;
        },
        (error: any) => {
          console.error('Error fetching weather data:', error);
          // Display a user-friendly error message to the user
          // You can set a property to show an error message in your template.
        }
      );
    }
  }
  
  

}
