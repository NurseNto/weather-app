import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compWeather',
  templateUrl: './compWeather.component.html',
  styleUrls: ['./compWeather.component.css']
})
export class CompWeatherComponent implements OnInit {

  @Input()
  divClassName!: string;
  @Input()
  divClassNameOverride!: string;
  @Input()
  mostlyClearHLClassName!: string;

  constructor() { }

  ngOnInit() {
  }

}
