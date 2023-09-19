import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  @Input()
  batteryClassName!: string;
  @Input()
  cap!: string;
  @Input()
  capClassName!: string;
  @Input()
  capacityClassName!: string;
  @Input()
  cellularConnection!: string;
  @Input()
  cellularConnectionClassName!: string;
  @Input()
  overlapGroupClassName!: string;
  @Input()
  timeClassName!: string;
  @Input()
  timeStyleClassName!: string;
  @Input()
  wifi!: string;
  @Input()
  wifiClassName!: string;

  constructor() { }

  ngOnInit() {
  }

}
