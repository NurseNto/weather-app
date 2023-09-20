import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

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
  cities: string[] = [];
  slideState = 'in';

  constructor() { }

  ngOnInit() {
  }

  

  addCity() {
    if (this.newCity.trim() !== '') {
      this.cities.push(this.newCity);
      this.newCity = '';
    }
  }

  deleteCity(index: number) {
    this.cities.splice(index, 1);
  }
}
