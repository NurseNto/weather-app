import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Cities } from '../Cities';
import { WeatherService } from 'src/app/service/weather.service';
import { City } from '../city';

@Component({
  selector: 'app-addCity',
  templateUrl: './addCity.component.html',
  styleUrls: ['./addCity.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class AddCityComponent implements OnInit {
  newCity = '';
  cities: any;
  slideState = 'in';
  newCityName: string = '';

  addedCity: Cities[] = [];
  weatherData: any;
  city!: string;

  constructor(private http: HttpClient, private weather: WeatherService) { }

  ngOnInit() {
    this.showCities();
    this.getWeatherDetails(this.newCityName);
  }

  // addCity() {
  //   if (this.newCity.trim() !== '') {
  //     this.cities.push(this.newCity);
  //     this.newCity = '';
  //   }
  // }

  addCity() {
    console.log(this.newCityName);
    
    if (this.newCityName.trim() !== '') {
      this.weather.getWeather(this.newCityName).subscribe(
        (data: any) => {
          // Create a new City object with the retrieved weather data
          const newCity: Cities = {
            name: this.newCityName,
            description: data.weather[0].description,
            mainTemp: data.main.temp,
            minTemp: data.main.temp_min,
            id: 0,
            weatherData: undefined
          };
  
          // Send a POST request to save the new city in the database
          this.http.post('http://localhost:3000/cities', newCity).subscribe(
            (response: any) => {
              // Add the new city to the list after it's saved in the database
              newCity.id = response.id;
              this.cities.push(newCity);
              console.log(newCity);
              
  
              // Clear the input field after adding the city
              this.newCityName = '';
  
              // Retrieve weather details for the newly added city
              this.getWeatherDetails(newCity.name);
            },
            (error) => {
              console.error('Error saving city:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching weather data:', error);
        }
      );
    }
  }
  
  getWeatherDetails(cityName: string) {
    this.weather.getWeather(cityName).subscribe((data: any) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
  

  // showCities(){
  //   this.http.get('http://localhost:3000/cities').subscribe(res=>{
  //     this.cities = res;
  //     console.log(res);
      
  //   })
  // }

  showCities() {
    this.http.get('http://localhost:3000/cities').subscribe((res: any) => {
      this.cities = res;
      console.log(res);

      // Fetch weather details for each city when the page loads
      this.cities.forEach((city: { name: string; weatherData: any; }) => {
        this.weather.getWeather(city.name).subscribe(
          (data: any) => {
            city.weatherData = data; // Store weather data for each city
          },
          (error) => {
            console.error('Error fetching weather data:', error);
          }
        );
      });
    });
  }

  
  

  deleteCity(index: number) {
    this.cities.splice(index, 1);
  }

  // getWeatherDetails(){
  //   this.city = this.newCityName
  //   this.weather.getWeather(this.city).subscribe((data: any) => {
  //     this.weatherData = data;
  //     console.log(this.weatherData);
      
  //   });
  // }
}
