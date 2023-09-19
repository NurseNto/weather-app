import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '', component: WeatherComponent
  },
  {
    path:'home', component: HomeComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
