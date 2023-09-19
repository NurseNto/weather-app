import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { HomeComponent } from './component/home/home.component';
import { AddCityComponent } from './component/addCity/addCity.component';

const routes: Routes = [
  {
    path: '', component: WeatherComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'addCity', component: AddCityComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
