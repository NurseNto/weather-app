import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

    private apiKey = '58463c111e24c484bf32cb840b333557';
    private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

constructor(private http: HttpClient) { }

getWeather(city: string) {
    const params = {
      q: city,
      appid: this.apiKey,
    };

    return this.http.get(this.apiUrl, { params });
  }

}
