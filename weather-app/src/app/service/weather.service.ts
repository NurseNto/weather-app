import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
 // private apiUrl = 'http://localhost:3000/api/weather';
  private apiUrl = 'http://localhost:3000/weather';


constructor(private http: HttpClient) { }

// getWeather(city: string) {
//     const params = {
//       q: city
//     };

//     return this.http.get(this.apiUrl, { params });
//   }

  getWeather(city: string) {
    const params = { city };
    return this.http.get(this.apiUrl, { params });
  }
}

