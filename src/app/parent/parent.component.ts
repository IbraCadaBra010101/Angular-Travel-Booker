import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  continents = [{info: 'Europa'}, {info: 'Central-Amerika'}];
  cityAttractions = [{info: 'Colosseeum, Vatikanen', cityName: 'Rom'},
    {info: 'Acropolis', cityName: 'Aten'},
    {info: 'Tenochtitlán Pyramiden', cityName: 'Mexico-City'},
    {info: 'Brandenburger Tor', cityName: 'Berlin'}];

  @Output() reset = true;


  constructor() {
  }

  cities: any;

  receiveMessage($event) {
    this.cities = $event;
    console.log(this.cities);
  }

  ngOnInit() {
  }

}
