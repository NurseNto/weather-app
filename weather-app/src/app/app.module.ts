import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './pages/weather/weather.component';
import { WeatherService } from './service/weather.service';
import { HomeComponent } from './component/home/home.component';
import { AddCityComponent } from './component/addCity/addCity.component';




@NgModule({
  declarations: [
    WeatherComponent,
    HomeComponent,
    AddCityComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
