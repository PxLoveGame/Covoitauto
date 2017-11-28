import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-display',
  templateUrl: './trips-display.component.html',
  styleUrls: ['./trips-display.component.css']
})
export class TripsDisplayComponent implements OnInit {

  today : string;
  var1 : string;
  myDate : string;
  newDate : string;
  dateCmp : string;

  trips: Object[] = [
    { "startCity":"Montpellier", "endCity":"Avignon", "date":"25/12/17", "place": "0"},
    { "startCity":"Montpellier", "endCity":"Paris", "date":"01/01/18", "place": "2"},
    { "startCity":"Nice", "endCity":"Lyon", "date":"20/12/17", "place": "2"}
  ];

  // today = new Date(); TENTATIVE DE COMPARAISON DE LA DATE DU TRAJET AVEC LA DATE ACTUELLE

  // this.var1 = String(this.trips[2].date);
  // myDate = var1;
  // myDate = myDate.split("/");
  // newDate = myDate[1]+"/"+myDate[0]+"/"+myDate[2];
  // dateCmp = new Date(newDate).getTime();


  constructor() { }

  ngOnInit() {
  
  }

}
